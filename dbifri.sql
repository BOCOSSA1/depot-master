-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mar 05 Mai 2020 à 07:45
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `dbifri`
--

-- --------------------------------------------------------

--
-- Structure de la table `annee_academique`
--

CREATE TABLE IF NOT EXISTS `annee_academique` (
  `annee_id` varchar(255) NOT NULL,
  `annee_encours` int(11) DEFAULT NULL,
  PRIMARY KEY (`annee_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `annee_academique`
--

INSERT INTO `annee_academique` (`annee_id`, `annee_encours`) VALUES
('2014-2015', 2015),
('2015-2016', 2016),
('2016-2017', 2017),
('2017-2018', 2018),
('2018-2019', 2019),
('2019-2020', 2020);

-- --------------------------------------------------------

--
-- Structure de la table `app_role`
--

CREATE TABLE IF NOT EXISTS `app_role` (
  `id` bigint(20) NOT NULL,
  `role_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `app_role`
--

INSERT INTO `app_role` (`id`, `role_name`) VALUES
(7, 'SUPER_ADMIN'),
(8, 'ADMIN'),
(9, 'USER'),
(10, 'AUTORITE');

-- --------------------------------------------------------

--
-- Structure de la table `ec`
--

CREATE TABLE IF NOT EXISTS `ec` (
  `ec_id` int(11) NOT NULL,
  `coefficient` int(11) DEFAULT NULL,
  `ec_code` varchar(255) DEFAULT NULL,
  `ec_libelle` varchar(255) DEFAULT NULL,
  `ue_ue_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`ec_id`),
  KEY `FKe5gwv0np3teprfgow9yac5c3` (`ue_ue_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `ec`
--

INSERT INTO `ec` (`ec_id`, `coefficient`, `ec_code`, `ec_libelle`, `ue_ue_id`) VALUES
(60, 2, 'AMAM', 'Algèbre matricielle et applications avec Matlab', 51),
(61, 2, 'Az', 'Analyse', 51),
(62, 2, 'LTP', 'Logique et techniques de preuves', 52),
(63, 2, 'MD', 'Mathématiques discrètes', 52),
(64, 1, 'Num', 'Numération', 52),
(65, 2, 'Prob', 'Probabilités', 53),
(66, 2, 'SiAM', 'Statistiques inférentielles et Applications avec Matlab', 53),
(67, 1, 'HI', 'Histoire de l''informatique', 54),
(68, 1, 'AJSI', 'Aspects juridiques liés aux systèmes d''information', 54),
(69, 1, 'IACS', 'Introduction aux architectures client-serveur', 55),
(70, 1, 'IRI', 'Installation des réseaux informatiques', 55),
(71, 1, 'CL', 'Code linguistique', 56),
(72, 1, 'PLA', 'Pratique de la langue anglaise', 56),
(74, 2, 'TSE', 'Théorie des systèmes d''exploitation', 57),
(75, 1, 'IAW', 'Introduction à l''administration sous Windows', 57),
(76, 1, 'IAL', 'Introduction à l''administration sous Linux/Unix', 57),
(77, 2, 'Algo', 'Algorithmique', 58),
(78, 2, 'ILC', 'Introduction au langage C', 58),
(79, 2, 'ATO', 'Architecture et technologie des ordinateurs', 59),
(80, 1, 'MI', 'Maintenance informatique', 59),
(91, 2, 'SNSF', 'Séries numériques et séries de fonctions', 81),
(92, 2, 'ED', 'Équations différentielles', 81),
(93, 1, 'LM', 'Logique mathématique', 81),
(94, 2, 'TGA', 'Théorie des graphes et applications', 82),
(95, 2, 'ROA', 'Recherche opérationnelles et applications', 82),
(96, 2, 'ABCL', 'Algèbre de Boole et circuits logiques', 82),
(97, 2, 'TBDR', 'Théorie des bases de données relationnelles', 83),
(98, 1, 'AR', 'Algèbre relationnelle', 83),
(99, 1, 'ILSQL', 'Introduction au langage SQL', 83),
(100, 1, 'ATRI', 'Architecture et topologie des réseaux informatiques', 84),
(101, 1, 'AIPV', 'Adressage IPv4 et IPv6', 84),
(102, 1, 'TRDA', 'Techniques de rédaction de documents administratifs', 85),
(103, 1, 'TRE', 'Techniques de recherche d''emploi', 85),
(104, 1, 'ISEM', 'Introduction aux systèmes d''exploitation pour mobile', 86),
(105, 1, 'VIRTU', 'Virtualisation', 86),
(106, 1, 'ALSQL', 'Aspects avancés du langage SQL', 87),
(107, 2, 'ISGBD', 'Initiation à MySQL et PostGres', 87),
(108, 2, 'ALCSD', 'Aspects avancés du langage C et structures des données', 88),
(109, 1, 'PT', 'Projet tutoré', 88),
(110, 1, 'AWEB', 'Architecture du Web', 89),
(111, 1, 'LPWEB', 'Langages de programmation Web', 89),
(112, 1, 'COND', 'Conduite', 90),
(132, 2, 'AMAM', 'Algèbre matricielle et applications avec Matlab', 113),
(133, 2, 'Az', 'Analyse', 113),
(134, 2, 'LTP', 'Logique et techniques des preuves', 114),
(135, 2, 'MD', 'Mathématiques discrètes', 114),
(136, 1, 'Num', 'Numération', 114),
(137, 2, 'PROB', 'Probabilités', 115),
(138, 2, 'SIAM', 'Statistiques inférentielles et Applications avec Matlab', 115),
(139, 1, 'HI', 'Histoire de l''informatique', 116),
(140, 1, 'AJSI', 'Aspects juridiques liés aux systèmes d''information', 116),
(141, 1, 'IACS', 'Introduction aux architectures client serveur', 117),
(142, 1, 'IRI', 'Installation des réseaux informatiques', 117),
(143, 1, 'CL', 'Code linguistique', 118),
(144, 1, 'PLA', 'Pratique de la langue anglaise', 118),
(145, 2, 'TSE', 'Théorie des systèmes d''exploitation', 119),
(146, 1, 'IAW', 'Introduction à l''administration sous Windows', 119),
(147, 1, 'IAL', 'Introduction à l''administration sous Unix/Linux', 119),
(148, 2, 'ALGO', 'Algorithmique', 120),
(149, 2, 'ILC', 'Introduction au langage C ', 120),
(150, 2, 'ATO', 'Architecture et technologie des ordinateurs', 121),
(151, 1, 'MI', 'Maintenance informatique', 121),
(152, 2, 'SNSF', 'Séries numériques et séries de fonctions', 122),
(153, 2, 'ED', 'Équations différentielles', 122),
(154, 1, 'LM', 'Logique mathématique', 122),
(155, 2, 'TGA', 'Théorie des graphes et applications', 123),
(156, 2, 'ROA', 'Recherche opérationnelle et applications', 123),
(157, 2, 'ABCL', 'Algèbre de Boole et circuits logiques', 123),
(158, 2, 'TBDR', 'Théorie des bases de données relationnelles', 124),
(159, 1, 'AR', 'Algèbre relationnelle', 124),
(160, 1, 'ILSQL', 'Introduction au langage SQL', 124),
(161, 1, 'ATPRI', 'Architecture et topologie des réseaux informatiques', 125),
(162, 1, 'ADRIPV', 'Adressage IPv4 et IPv6', 117),
(163, 1, 'TRDA', 'Techniques de rédaction de documents administratifs', 126),
(164, 1, 'TRE', 'Techniques de recherche d''emploi', 126),
(165, 1, 'ISEM', 'Introduction aux systèmes d''exploitation pour mobile', 127),
(166, 1, 'VIRTU', 'Virtualisation', 127),
(167, 1, 'ALSQL', 'Aspects avancés du langage SQL', 128),
(168, 2, 'ISGBD', 'Initiation à MySQL et PostGres', 128),
(169, 2, 'ALC', 'Aspects avancés du langage C et structures de données', 129),
(170, 1, 'PT', 'Projets tutorés', 129),
(171, 1, 'AWEB', 'Architecture du web ', 130),
(172, 1, 'LPWEB', 'Langages de programmation web', 130),
(173, 1, 'COND', 'Conduite', 131),
(324, 2, 'TP', 'Travaux Pratique', 322),
(325, 2, 'EE', 'Evaluation Ecrite', 322),
(326, 1, 'TG', 'Travail de Groupe', 322),
(327, 2, 'EE', 'Evaluation Ecrite', 323),
(328, 2, 'TP', 'Travaux Pratique', 323),
(329, 1, 'TG', 'Travail de Groupe', 323);

-- --------------------------------------------------------

--
-- Structure de la table `grade`
--

CREATE TABLE IF NOT EXISTS `grade` (
  `grade_id` int(11) NOT NULL,
  `grade_libelle` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`grade_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `grade`
--

INSERT INTO `grade` (`grade_id`, `grade_libelle`) VALUES
(1, 'licence1'),
(2, 'licence2'),
(3, 'licence3'),
(4, 'master1'),
(5, 'master2');

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

CREATE TABLE IF NOT EXISTS `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(366),
(366),
(366),
(366),
(366),
(366),
(366);

-- --------------------------------------------------------

--
-- Structure de la table `note`
--

CREATE TABLE IF NOT EXISTS `note` (
  `note_id` int(11) NOT NULL,
  `note` float NOT NULL,
  `note_date` date DEFAULT NULL,
  `ec_ec_id` int(11) DEFAULT NULL,
  `etudiant_personne_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`note_id`),
  KEY `FK46grwyxicnvtrgditku862okq` (`ec_ec_id`),
  KEY `FKpfe8bv0afq4p7fsssw3ef82sl` (`etudiant_personne_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `note`
--

INSERT INTO `note` (`note_id`, `note`, `note_date`, `ec_ec_id`, `etudiant_personne_id`) VALUES
(73, 15, '2015-05-06', 60, 14),
(191, 15.75, '2015-05-06', 60, 2),
(192, 16.5, '2015-05-06', 60, 12),
(193, 17, '2015-05-06', 60, 174),
(194, 8.5, '2015-05-06', 60, 175),
(195, 15.75, '2015-05-06', 60, 176),
(196, 14, '2015-05-06', 61, 2),
(197, 13.5, '2015-05-06', 61, 12),
(198, 18.5, '2015-05-06', 61, 14),
(199, 16, '2015-05-06', 61, 174),
(200, 13.75, '2015-05-06', 61, 175),
(201, 14.5, '2015-05-06', 61, 176),
(202, 7.5, '2015-05-07', 62, 2),
(203, 15, '2015-05-07', 62, 12),
(204, 13, '2015-05-07', 62, 14),
(205, 14, '2015-05-07', 62, 174),
(206, 10.5, '2015-05-07', 62, 175),
(207, 12.75, '2015-05-07', 62, 176),
(208, 15, '2015-05-12', 63, 2),
(209, 13.5, '2015-05-12', 63, 12),
(210, 12, '2015-05-12', 63, 14),
(211, 13, '2015-05-12', 63, 174),
(212, 10.75, '2015-05-12', 63, 175),
(213, 18.5, '2015-05-12', 63, 176),
(214, 13.5, '2015-05-13', 64, 2),
(215, 15, '2015-05-13', 64, 12),
(216, 14, '2015-05-13', 64, 14),
(217, 16, '2015-05-13', 64, 174),
(218, 13.75, '2015-05-13', 64, 175),
(219, 17, '2015-05-13', 64, 176),
(220, 13.75, '2016-05-04', 91, 2),
(221, 12, '2016-05-04', 91, 12),
(222, 16, '2016-05-04', 91, 14),
(223, 13.5, '2016-05-04', 91, 174),
(224, 18, '2016-05-04', 91, 175),
(225, 14, '2016-05-04', 91, 176),
(226, 8.5, '2016-05-05', 92, 2),
(227, 16.75, '2016-05-05', 92, 12),
(228, 17, '2016-05-05', 92, 14),
(229, 12.75, '2016-05-05', 92, 174),
(230, 15, '2016-05-05', 92, 175),
(231, 18, '2016-05-05', 92, 176),
(232, 14.5, '2016-05-03', 93, 2),
(233, 13.7, '2016-05-03', 93, 12),
(234, 16, '2016-05-03', 93, 14),
(235, 12.75, '2016-05-03', 93, 175),
(236, 12.75, '2016-05-03', 93, 174),
(237, 12.75, '2016-05-03', 93, 176),
(238, 13.7, '2016-05-03', 95, 12),
(239, 10.5, '2016-05-03', 94, 2),
(240, 10.75, '2016-05-03', 95, 174),
(241, 10.5, '2016-05-03', 95, 2),
(242, 16, '2016-05-03', 96, 14),
(243, 12.75, '2016-05-03', 96, 174),
(244, 10.5, '2016-05-03', 96, 2),
(245, 13.75, '2016-05-03', 95, 175),
(247, 8.7, '2016-05-03', 96, 12),
(246, 13.7, '2016-05-03', 94, 12),
(249, 16, '2016-05-03', 95, 14),
(250, 13.75, '2016-05-03', 96, 175),
(251, 17.75, '2016-05-03', 96, 176),
(252, 11.75, '2016-05-03', 95, 176),
(253, 11.75, '2016-05-03', 94, 176),
(254, 13.75, '2016-05-03', 94, 175),
(255, 12.75, '2016-05-03', 94, 174),
(248, 16, '2016-05-03', 94, 14),
(256, 10.5, '2016-02-03', 135, 177),
(257, 10.5, '2015-05-03', 132, 177),
(258, 13.7, '2016-02-03', 135, 178),
(259, 16, '2015-05-03', 132, 179),
(260, 13.7, '2015-05-03', 132, 178),
(261, 10.5, '2016-02-02', 136, 177),
(262, 12.75, '2016-02-02', 136, 180),
(263, 16, '2016-02-02', 136, 179),
(264, 6, '2016-02-03', 135, 179),
(265, 12.75, '2016-02-03', 135, 180),
(266, 16, '2016-02-03', 133, 179),
(267, 10.5, '2016-02-04', 134, 177),
(268, 13.7, '2016-02-03', 133, 178),
(269, 13.7, '2016-02-04', 134, 178),
(270, 12.75, '2015-05-03', 132, 180),
(271, 4.7, '2016-02-02', 136, 178),
(272, 14.75, '2016-02-04', 134, 180),
(273, 11.75, '2016-02-03', 133, 182),
(274, 13.75, '2015-05-03', 132, 181),
(276, 16, '2016-02-04', 134, 179),
(278, 10.75, '2016-02-02', 136, 181),
(279, 13.75, '2016-02-04', 134, 181),
(280, 11.75, '2016-02-04', 134, 182),
(281, 12.75, '2016-02-03', 133, 180),
(282, 11.75, '2016-02-03', 135, 182),
(283, 13.75, '2016-02-03', 133, 181),
(284, 11.75, '2015-05-03', 132, 182),
(275, 11.75, '2016-02-02', 136, 182),
(277, 13.75, '2016-02-03', 135, 181),
(285, 10.5, '2016-02-03', 133, 177),
(286, 12.75, '2015-05-03', 152, 180),
(287, 10.5, '2015-05-03', 152, 177),
(288, 13.75, '2015-05-03', 152, 181),
(289, 16, '2015-05-03', 152, 179),
(290, 16, '2016-02-03', 153, 179),
(291, 13.7, '2016-02-03', 153, 178),
(292, 10.5, '2016-02-03', 153, 177),
(293, 13.7, '2015-05-03', 152, 178),
(294, 11.75, '2015-05-03', 152, 182),
(295, 13.75, '2016-02-03', 153, 181),
(296, 4.7, '2016-02-02', 157, 178),
(297, 4.7, '2016-02-02', 156, 178),
(298, 13.7, '2016-02-04', 154, 178),
(299, 10.5, '2016-02-02', 156, 177),
(300, 12.75, '2016-02-03', 153, 180),
(301, 10.5, '2016-02-02', 157, 177),
(302, 10.5, '2016-02-04', 154, 177),
(303, 10.5, '2016-02-03', 155, 177),
(304, 13.7, '2016-02-03', 155, 178),
(305, 16, '2016-02-02', 157, 179),
(306, 11.75, '2016-02-04', 154, 182),
(307, 16, '2016-02-02', 156, 179),
(308, 11.75, '2016-02-03', 153, 182),
(309, 16, '2016-02-04', 154, 179),
(310, 12.75, '2016-02-02', 157, 180),
(311, 10.75, '2016-02-02', 157, 181),
(312, 12.75, '2016-02-02', 156, 180),
(313, 14.75, '2016-02-04', 154, 180),
(314, 6, '2016-02-03', 155, 179),
(315, 10.75, '2016-02-02', 156, 181),
(316, 12.75, '2016-02-03', 155, 180),
(318, 13.75, '2016-02-03', 155, 181),
(317, 11.75, '2016-02-02', 157, 182),
(319, 13.75, '2016-02-04', 154, 181),
(320, 11.75, '2016-02-02', 156, 182),
(321, 11.75, '2016-02-03', 155, 182),
(331, 13.7, '2015-05-03', 324, 184),
(332, 10.5, '2016-02-03', 325, 183),
(333, 13.7, '2016-02-03', 325, 184),
(330, 10.5, '2015-05-03', 324, 183),
(334, 10.5, '2016-02-02', 328, 183),
(335, 4.7, '2016-02-02', 329, 184),
(336, 4.7, '2016-02-02', 328, 184),
(337, 10.75, '2016-02-02', 328, 187),
(338, 13.7, '2016-02-03', 327, 184),
(339, 10.5, '2016-02-03', 327, 183),
(340, 10.5, '2016-02-02', 329, 183),
(342, 16, '2016-02-03', 325, 185),
(343, 10.5, '2016-02-04', 326, 183),
(344, 16, '2015-05-03', 324, 185),
(341, 13.7, '2016-02-04', 326, 184),
(345, 10.75, '2016-02-02', 329, 187),
(347, 16, '2016-02-02', 329, 185),
(346, 11.75, '2015-05-03', 324, 188),
(348, 16, '2016-02-04', 326, 185),
(349, 12.75, '2016-02-03', 325, 186),
(350, 12.75, '2015-05-03', 324, 186),
(351, 16, '2016-02-02', 328, 185),
(352, 12.75, '2016-02-02', 329, 186),
(353, 6, '2016-02-03', 327, 185),
(354, 12.75, '2016-02-02', 328, 186),
(355, 13.75, '2016-02-03', 325, 187),
(356, 14.75, '2016-02-04', 326, 186),
(357, 13.75, '2015-05-03', 324, 187),
(358, 18.75, '2016-02-03', 327, 186),
(359, 11.75, '2016-02-03', 325, 188),
(360, 13.75, '2016-02-04', 326, 187),
(361, 18.75, '2016-02-03', 327, 187),
(362, 11.75, '2016-02-02', 328, 188),
(363, 11.75, '2016-02-02', 329, 188),
(364, 18.75, '2016-02-03', 327, 188),
(365, 11.75, '2016-02-04', 326, 188);

-- --------------------------------------------------------

--
-- Structure de la table `personne`
--

CREATE TABLE IF NOT EXISTS `personne` (
  `type_user` varchar(255) NOT NULL,
  `personne_id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `sexe` varchar(255) DEFAULT NULL,
  `telephone` bigint(20) NOT NULL,
  `type_personne` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `matricule` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`personne_id`),
  UNIQUE KEY `UK_lif11ug7pqkdimuk0beonbfng` (`email`),
  UNIQUE KEY `UK_9qi3fxtf05vne6ddf51mmx1a0` (`username`),
  UNIQUE KEY `UK_1q0mp4kn3p5ou7e1mk28jiwcd` (`matricule`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `personne`
--

INSERT INTO `personne` (`type_user`, `personne_id`, `email`, `nom`, `prenom`, `sexe`, `telephone`, `type_personne`, `password`, `username`, `matricule`) VALUES
('AppUser', 13, 'admin@yahoo.fr', 'ADMINISTRATEUR', 'Admin', 'man', 67820917, 'admin', '$2a$10$DJx7TK4Raji6LhGC/gSohupVK1nPds9IY9tC83YB2Om9Xzyfl6NFu', 'admin', NULL),
('Etudiant', 2, 'eunice@gmail.com', 'BOTON', 'Eunice', 'woman', 54544545, 'etudiant', 'eunice', 'eunice', 229342333),
('AppUser', 3, 'bocossa1996@gmail.com', 'BOCOSSA', 'Joël', 'homme', 96308633, 'admin', '$2a$10$nm.oFiaU2O.k8.YlblaJoeoNDxTC2icN4MaiNPfzwgWMMpaqbNSry', 'joland', NULL),
('AppUser', 4, 'klak@gmail.com', 'KLAKO', 'Elfrida', 'femme', 96736283, 'parent', '$2a$10$S5kv9NfNGmIXFhzQ/UdG8.YF4kxPPDjVCWjhSNlC8sk3xTt86rm7C', 'frida', NULL),
('AppUser', 5, 'sosthene@gmail.com', 'SOUSSIA', 'Aurel', 'homme', 96357614, 'autorite', '$2a$10$J.bH0YwchtpVucjiUs1OMuoGyEct3ovR4O0UbsAjvRp5kex80Rcgy', 'aureli', NULL),
('AppUser', 6, 'dirk@gmail.com', 'DOHOU', 'Dirk', 'homme', 61287548, 'parent', '$2a$10$TnrKo75FTvoAgJSdwAoznuFBIlLOTNX2zlCo4Ko276oCiRoEmX9My', 'dirk', NULL),
('Etudiant', 12, 'agbamiche@gmail.com', 'AGBASSOU', 'Joël', 'man', 64564685, 'etudiant', '$2a$10$SKan0mlzMLf9Xh13Woig7uWATHvVqFfKkwDNKzuDL8rdSWRjVoC1S', 'miche', 30292418),
('Etudiant', 14, 'bonaventure@gmail.com', 'TOYI', 'Bonaventure', 'man', 66476760, 'etudiant', '$2a$10$IQQolotzxWwh3T8JrX7lIu49N1oKXwCmlcm6gBdpUnpUlSXcmzGV6', 'bona', 30292420),
('Etudiant', 174, 'yasmine@gmail.com', 'AKPAKLA', 'Yasmine', 'woman', 66858453, 'etudiant', '$2a$10$656KO/2lrApwfiZqH2HXH.AJeAAjleAg9ZaE/z1FTeev99oD1FZN2', 'mina', 30292421),
('Etudiant', 175, 'gandote@yahoo.fr', 'GANDOTE', 'Glawdys', 'woman', 67633410, 'etudiant', '$2a$10$DToXs92hKX5nZANwnwqJFOLYhyb1GoRTYKwl3D0O9xXKr1fhHq1Gq', 'glado', 30292422),
('Etudiant', 176, 'jeanhounsa@gmail.com', 'HOUNSA', 'Jean-Paul', 'man', 66858453, 'etudiant', '$2a$10$hsT7yAF1ZJakOTbTzr94d.7ASWCz2BOeYLXKy/UUxy2dRsrG2WMiW', 'jpololo', 30292423),
('Etudiant', 177, 'dicoko@gmail.com', 'SOSSOU', 'Dicko', 'man', 67230872, 'etudiant', '$2a$10$Zsig.zprBvMm284dLyPMUOtfZ952XpurmUMICsMdHfzltGVKJDyxW', 'dicko', 30292424),
('Etudiant', 178, 'olves@yahoo.fr', 'METOGNIZO', 'Dave Olves', 'man', 66858453, 'etudiant', '$2a$10$17fXqC0O715bavHDyhGM/OTfCIUpOB5Yw2TWA1xWnyYOG6nlATcBm', 'ovles', 30292425),
('Etudiant', 179, 'amo@Yahoo.fr', 'AMOROS', 'Nancio', 'man', 91286527, 'etudiant', '$2a$10$DKSIaEdmYDplwaALgsiueeTfVL6wJHpC.mEJI9MW/lJhStZvtprIa', 'nancio', 30292426),
('Etudiant', 180, 'medine@gmail.com', 'SOSSOU', 'Médine', 'woman', 67820917, 'etudiant', '$2a$10$WE4yAWtKm6lkeoA5UP/86udWPPxnfr5KpMWEj0UEpWtUFomgG6Amy', 'medine', 30292427),
('Etudiant', 181, 'agoss@gmail.com', 'AGOSSOU', 'Jacqueline', 'woman', 91653876, 'etudiant', '$2a$10$NRCeZNoz05J51X7SmfrCS.p5hsqhYf/bq/z8rlJmDNMkREJ2qFIxG', 'jaky', 30292428),
('Etudiant', 182, 'ostian@gmail.com', 'OLANIYAN', 'Ostian Stéphane', 'man', 67820917, 'etudiant', '$2a$10$bhX9.nztM5UveZBQ0wiolOYYUaX0j7LtvApw2C/q0PwTWwizi4E96', 'steph', 30292429),
('Etudiant', 183, 'nath@gmail.com', 'DOGA', 'Nathalie', 'woman', 66858453, 'etudiant', '$2a$10$UIRG1ZEwsp2wKWGKgg6i8.Hqe5p93TeuGfMJHphhJdu9sbexzSyMK', 'nath', 30292430),
('Etudiant', 184, 'abibou@gmail.com', 'ABIBOU', 'Manal', 'woman', 96122483, 'etudiant', '$2a$10$JQYRnDD38jI.6Ij590d4wud1CXWBb7xXJbuMh0IMokKfwqGw93JPq', 'manal', 30292431),
('Etudiant', 185, 'aurel@gmail.com', 'SOUSSIA', 'Sosthène', 'man', 96357614, 'etudiant', '$2a$10$iYBbUzqGwiOWukmc3opr4OaMM5sWVf88lJWvvmkeS6mwk0FtiYjEG', 'aurel', 30292432),
('Etudiant', 186, 'nado@gmail.com', 'DOGA', 'Nadia', 'woman', 66858453, 'etudiant', '$2a$10$b7B2Q4jsYHqTGGzWXn35zO36/DLR..ObKkLrbJJt.PvTZ.7FahSIW', 'nado', 30292433),
('Etudiant', 187, 'akueho@gmail.com', 'AKUEYINHO', 'Nadège', 'woman', 66858453, 'etudiant', '$2a$10$/qzAxOY8tm5EWQ2rrNt/ye3vvzmJbnW/W2lcskKss.JuGu/BjFvU2', 'akueson', 30292435),
('Etudiant', 188, 'tosinhoun@gmail.com', 'TOSINHOUN', 'Ulrich', 'man', 66858453, 'etudiant', '$2a$10$esVGBjr67ov7IqkE3A5cJey1Hf4wkybOdj86.I96c1qxJ8jh9lZJe', 'ulrich', 30292436),
('Etudiant', 190, 'clo@yahoo.fr', 'PRUDENCIO', 'Clodette', 'woman', 66858453, 'etudiant', '$2a$10$459djTm2KFfBRw.YoUmhO.Pvlm6OldqLUvQ8Nz8ogLVie9RIzecNW', 'clodette', 30292437);

-- --------------------------------------------------------

--
-- Structure de la table `personne_roles`
--

CREATE TABLE IF NOT EXISTS `personne_roles` (
  `app_user_personne_id` int(11) NOT NULL,
  `roles_id` bigint(20) NOT NULL,
  KEY `FK6vrwesnrofxb6im0g9r4u21dr` (`roles_id`),
  KEY `FK6mbak2690agfla93ya2rc38ip` (`app_user_personne_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `personne_roles`
--

INSERT INTO `personne_roles` (`app_user_personne_id`, `roles_id`) VALUES
(3, 7),
(6, 8),
(4, 9),
(5, 10),
(12, 9),
(13, 8),
(14, 9),
(174, 9),
(175, 9),
(176, 9),
(177, 9),
(178, 9),
(179, 9),
(180, 9),
(181, 9),
(182, 9),
(183, 9),
(184, 9),
(185, 9),
(186, 9),
(187, 9),
(188, 9),
(190, 9);

-- --------------------------------------------------------

--
-- Structure de la table `semestre`
--

CREATE TABLE IF NOT EXISTS `semestre` (
  `sem_id` int(11) NOT NULL,
  `sem_libelle` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sem_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `semestre`
--

INSERT INTO `semestre` (`sem_id`, `sem_libelle`) VALUES
(1, 'semestre1'),
(2, 'semestre2'),
(3, 'semestre3'),
(4, 'semestre4'),
(5, 'semestre5'),
(6, 'semestre6'),
(7, 'semestre7'),
(8, 'semestre8'),
(9, 'semestre9'),
(10, 'semestre10'),
(11, 'semestre11'),
(12, 'semestre12');

-- --------------------------------------------------------

--
-- Structure de la table `sem_grade`
--

CREATE TABLE IF NOT EXISTS `sem_grade` (
  `id` int(11) NOT NULL,
  `specialite` varchar(255) DEFAULT NULL,
  `grade_grade_id` int(11) DEFAULT NULL,
  `semestre_sem_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKlrdidyckkgw41v3x9v20tx6fe` (`grade_grade_id`),
  KEY `FK7l0i12mthq0sgrku56q5hh9ge` (`semestre_sem_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `sem_grade`
--

INSERT INTO `sem_grade` (`id`, `specialite`, `grade_grade_id`, `semestre_sem_id`) VALUES
(15, 'Sécurité Informatique', 1, 1),
(16, 'Sécurité Informatique', 1, 2),
(17, 'Sécurité Informatique', 2, 3),
(18, 'Sécurité Informatique', 2, 4),
(19, 'Sécurité Informatique', 3, 5),
(20, 'Sécurité Informatique', 3, 6),
(21, 'Sécurité Informatique', 4, 7),
(22, 'Sécurité Informatique', 4, 8),
(23, 'Sécurité Informatique', 5, 9),
(24, 'Sécurité Informatique', 5, 10),
(25, 'Système d''Information et Réseaux Informatiques', 3, 5),
(26, 'Système d''Information et Réseaux Informatiques', 3, 6),
(27, 'Système d''Information et Réseaux Informatiques', 4, 7),
(28, 'Système d''Information et Réseaux Informatiques', 4, 8),
(29, 'Système d''Information et Réseaux Informatiques', 5, 9),
(30, 'Système d''Information et Réseaux Informatiques', 5, 10),
(31, 'Génie Logiciel', 1, 1),
(32, 'Génie Logiciel', 1, 2),
(33, 'Génie Logiciel', 2, 3),
(34, 'Génie Logiciel', 2, 4),
(35, 'Génie Logiciel', 3, 5),
(36, 'Génie Logiciel', 3, 6),
(37, 'Génie Logiciel', 4, 7),
(38, 'Génie Logiciel', 4, 8),
(39, 'Génie Logiciel', 5, 9),
(40, 'Génie Logiciel', 5, 10),
(41, 'Internet et Multi-Média', 1, 1),
(42, 'Internet et Multi-Média', 1, 2),
(43, 'Internet et Multi-Média', 2, 3),
(44, 'Internet et Multi-Média', 2, 4),
(45, 'Internet et Multi-Média', 3, 5),
(46, 'Internet et Multi-Média', 3, 6),
(47, 'Internet et Multi-Média', 4, 7),
(48, 'Internet et Multi-Média', 4, 8),
(49, 'Internet et Multi-Média', 5, 9),
(50, 'Internet et Multi-Média', 5, 10);

-- --------------------------------------------------------

--
-- Structure de la table `specialite`
--

CREATE TABLE IF NOT EXISTS `specialite` (
  `code` varchar(255) NOT NULL,
  `specialite` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `specialite`
--

INSERT INTO `specialite` (`code`, `specialite`) VALUES
('SI', 'Sécurité Informatique'),
('SIRI', 'Système d''Information et Réseaux Informatiques'),
('GL', 'Génie Logiciel'),
('IM', 'Internet et Multi-Média');

-- --------------------------------------------------------

--
-- Structure de la table `task`
--

CREATE TABLE IF NOT EXISTS `task` (
  `id` bigint(20) NOT NULL,
  `task_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `ue`
--

CREATE TABLE IF NOT EXISTS `ue` (
  `ue_id` int(11) NOT NULL,
  `moyenne_validation` float NOT NULL,
  `ue_code` varchar(255) DEFAULT NULL,
  `ue_libelle` varchar(255) DEFAULT NULL,
  `annee_academique_annee_id` varchar(255) DEFAULT NULL,
  `sem_grade_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`ue_id`),
  KEY `FKdqrod49pmmvvxdu6kt0suyo81` (`annee_academique_annee_id`),
  KEY `FKnfl4ce5fjjiolbcsam5r2wd2w` (`sem_grade_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `ue`
--

INSERT INTO `ue` (`ue_id`, `moyenne_validation`, `ue_code`, `ue_libelle`, `annee_academique_annee_id`, `sem_grade_id`) VALUES
(51, 12.5, 'MAG2501', 'Mathématiques Générales', '2015-2016', 31),
(52, 12.5, 'MPI2501', 'Mathématiques pour l''Informatique', '2015-2016', 31),
(53, 12.5, 'PBS2501', 'Probabilités et Statistiques', '2015-2016', 31),
(54, 12.5, 'DRI2501', 'Droit de l''informatique', '2015-2016', 31),
(55, 12.5, 'PCP2501', 'Concepts des Réseaux Informatiques', '2015-2016', 31),
(56, 12.5, 'ANF2501', 'Anglais Fonctionnel', '2015-2016', 31),
(57, 13, 'SYS2501', 'Systèmes', '2015-2016', 31),
(58, 13.5, 'BPP2501', 'Bases de la Programmation Procédurale', '2015-2016', 31),
(59, 14, 'CMI2501', 'Connaissance de Matériels Informatiques', '2015-2016', 31),
(81, 12.4, 'AMA2502', 'Analyse Mathématique', '2015-2016', 32),
(82, 13, 'MAP2502', 'Mathématiques Appliquées', '2015-2016', 32),
(83, 13, 'FBD2502', 'Fondamentaux des Bases de Données Relationnelles', '2015-2016', 32),
(84, 12.5, 'CRI2502', 'Concepts Avancés des Réseaux Informatiques', '2015-2016', 32),
(85, 13, 'DEP2502', 'Développement Personnel', '2015-2016', 32),
(86, 12.5, 'SYA', 'Systèmes Avancés', '2015-2016', 32),
(87, 12, 'ABD2502', 'Administration des Bases de Données Relationnelles', '2015-2016', 32),
(88, 13.5, 'PRP2502', 'Programmation Procédurale', '2015-2016', 32),
(89, 12.75, 'WEB', 'Technologie Web', '2015-2016', 32),
(90, 14, 'DIS2502', 'Discipline', '2015-2016', 32),
(113, 13, 'MAG2501', 'Mathématiques Générales', '2015-2016', 15),
(114, 12.5, 'MPI2501', 'Mathématiques pour l''Informatique', '2015-2016', 15),
(115, 13, 'PBS2501', 'Probabilités et Statistiques', '2015-2016', 15),
(116, 13.5, 'DRI2501', 'Droit de l''informatique', '2015-2016', 15),
(117, 13, 'CRI2501', 'Concepts des réseaux informatiques', '2015-2016', 15),
(118, 12.5, 'ANF2501', 'Anglais Fonctionnel', '2015-2016', 15),
(119, 13, 'SYS2501', 'Systèmes', '2015-2016', 15),
(120, 12.5, 'BPP2501', 'Bases de la Programmation Procédurale', '2015-2016', 15),
(121, 13, 'CMI2501', 'Connaissances du matériel informatique', '2015-2016', 15),
(122, 13, 'AMA2502', 'Analyse Mathématique', '2015-2016', 16),
(123, 12.5, 'MAP2501', 'Mathématiques Appliquées', '2015-2016', 16),
(124, 13.5, 'FBD2502', 'Fondamentaux des Bases de Données Relationnelles', '2015-2016', 16),
(125, 13, 'CRI2502', 'Concepts avancées des Réseaux Informatiques', '2015-2016', 16),
(126, 14, 'DEP2502', 'Développement Personnel', '2015-2016', 16),
(127, 12.75, 'SYA2502', 'Systèmes Avancés', '2015-2016', 16),
(128, 13, 'ABD2502', 'Administration des Bases de Données Relationnelles', '2015-2016', 16),
(129, 13, 'PRP2502', 'Programmation Procédurale', '2015-2016', 16),
(130, 13.5, 'WEB2502', 'Technologies Web', '2015-2016', 16),
(131, 14, 'DIS2502', 'Discipline', '2015-2016', 16),
(322, 12, 'PC2503', 'Programmation C', '2014-2015', 25),
(323, 13.5, 'SGBD2503', 'Système de Gestion des Bases de Données', '2014-2015', 26);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
