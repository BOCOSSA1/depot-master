package org.sid.sec;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @SuppressWarnings("deprecation")
    @Bean
    public static NoOpPasswordEncoder passwordEncoder() {
        return (NoOpPasswordEncoder) NoOpPasswordEncoder.getInstance();
    }

    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService)
                .passwordEncoder(bCryptPasswordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        //http.formLogin();//.loginPage("/login");
        http.authorizeRequests().antMatchers("/users/**","/list-users/**","/create-users/**",
                "/one-user/{username}/**","/create-autorite/**","/create-admin/**","/create-etudiants/**","/etudiant/list/**",
                "/etudiant/**", "/login/**", "/register/**","/tasks/**","/delete-user/{personneId}/**","/list-etudiant/**",
                "/semgrade/list/**","/semgrade/{id}/**","/semgrade/save/**","/grade/list/**","/grade/{gradeId}","/ue/list/**",
                "/update-user/**", "/grade/save/**", "/semestre/list/**", "/semestre/save/**", "/semestre/{semId}/**", "/annee/list/**",
                "/annee/save/**","/annee/{anneeId}/**", "/ec/save/**", "/ec/list/**", "/ec/{ecId}/**", "/ue/save/**", "/ue/list/**",
                "/ue/{ueId}/**", "/note/list/**","/note/save/**", "/note/{noteId}", "/specialite/save/**", "/specialite/list/**",
                "/specialite/{code}/**","/annee/delete/{anneeId}", "/ue/delete/{ueId}", "/ec/delete/{ecId}","/grade/delete/{gradeId}",
                "/note/delete/{noteId}","/semestre/delete/{semId}","/semgrade/delete/{id}","/specialite/delete/{code}",
                "/note/notefilter/**","/etudiant/{personneId}","/feedback").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/tasks/**", "/users/**","/create-users/**").hasAuthority("SUPER_ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.PUT, "/update-etudiants/**").hasAuthority("SUPER_ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/delete-user/{personneId}/**","/grade/delete/{gradeId}/**").hasAuthority("SUPER_ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/list-users/**","/tasks/**", "/ecs/**").permitAll();
        http.authorizeRequests().anyRequest().authenticated();
        http.addFilter(new JWTAuthenticationFilter(authenticationManager()));
        http.addFilterBefore(new JWTAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);

    }
}
