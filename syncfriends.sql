-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2023 at 04:28 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `syncfriends`
--

-- --------------------------------------------------------

--
-- Table structure for table `agendamentos`
--

CREATE TABLE `agendamentos` (
  `idAgendamento` int(11) NOT NULL,
  `usuarioCriador` int(11) NOT NULL,
  `iniciaEm` datetime NOT NULL,
  `terminaEm` datetime NOT NULL,
  `status` tinyint(1) NOT NULL,
  `idJogo` int(11) NOT NULL,
  `criadoEm` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `amigos`
--

CREATE TABLE `amigos` (
  `idAmizade` int(11) NOT NULL,
  `idCriador` int(11) NOT NULL,
  `idDestino` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `CriadoEm` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jogos`
--

CREATE TABLE `jogos` (
  `idJogo` int(11) NOT NULL,
  `nomeJogo` varchar(255) NOT NULL,
  `imagemJogo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jogos`
--

INSERT INTO `jogos` (`idJogo`, `nomeJogo`, `imagemJogo`) VALUES
(2, 'valorant', '8773e0c4e4a35fd7540294de6b8dd729-valorant.jpg'),
(5, 'League Of Legends', 'ecb2fec83e7efebcc10baf96acae6676-lol.jpg'),
(6, 'Rocket League', '0bb9587eeb56bc44c43d4e375279856a-rl.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `participantes`
--

CREATE TABLE `participantes` (
  `idParticipante` int(11) NOT NULL,
  `idAgendamento` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `criadoEm` datetime NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nome`, `senha`, `avatar`, `criadoEm`, `email`, `status`) VALUES
(47, 'Matheus Pitas', '$2b$10$4t1Eqr3sQItYpYiJS74g3uRKwXgVPy/wNSGpTT3XFgT.Zwv634N.2', '8fe0f060235a64fbc82fe11a0c9cb1dc-a.jpg', '2023-11-22 23:54:17', 'matheus.baptista@gmail.com', 1),
(48, 'Pitas', '$2b$10$hwB2eNKJ/PPLmi7Cf4F03OAMhbud/Sdwu.vHJTQMNjlXj.NQGAep2', '1b4da537a6e8715e6a81810b88cad76c-b.jpg', '2023-11-22 23:54:44', 'p.p@gmail.com', 1),
(49, 'BapBap', '$2b$10$eBdRX6yeCF48T8h0mhtBhOwmbvVpDxNVLH6cAFWAXkDel2.JrBvwK', '8a8aa5eef7e1a3064b63d7725f7b80b7-c.jpg', '2023-11-22 23:54:55', 'bap.bap@gmail.com', 1),
(50, 'Pitintas', '$2b$10$oHF8VopQCOaNJCr7rzvbVebjpZS8rIZHLkDh9SpwNmxQYu7C1IUpS', '84e6693f0e0c0065bb74bedbe3d930af-eu.jpg', '2023-11-22 23:56:40', 'pi.pi@gmail.com', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agendamentos`
--
ALTER TABLE `agendamentos`
  ADD PRIMARY KEY (`idAgendamento`),
  ADD KEY `usuarioCriador` (`usuarioCriador`),
  ADD KEY `idJogo` (`idJogo`);

--
-- Indexes for table `amigos`
--
ALTER TABLE `amigos`
  ADD PRIMARY KEY (`idAmizade`),
  ADD KEY `IdCriador` (`idCriador`),
  ADD KEY `IdDestino` (`idDestino`);

--
-- Indexes for table `jogos`
--
ALTER TABLE `jogos`
  ADD PRIMARY KEY (`idJogo`),
  ADD UNIQUE KEY `nomeJogo` (`nomeJogo`);

--
-- Indexes for table `participantes`
--
ALTER TABLE `participantes`
  ADD PRIMARY KEY (`idParticipante`),
  ADD KEY `idAgendamento` (`idAgendamento`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agendamentos`
--
ALTER TABLE `agendamentos`
  MODIFY `idAgendamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `amigos`
--
ALTER TABLE `amigos`
  MODIFY `idAmizade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `jogos`
--
ALTER TABLE `jogos`
  MODIFY `idJogo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `participantes`
--
ALTER TABLE `participantes`
  MODIFY `idParticipante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=173;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `agendamentos`
--
ALTER TABLE `agendamentos`
  ADD CONSTRAINT `agendamentos_ibfk_1` FOREIGN KEY (`usuarioCriador`) REFERENCES `usuarios` (`idUsuario`),
  ADD CONSTRAINT `agendamentos_ibfk_2` FOREIGN KEY (`idJogo`) REFERENCES `jogos` (`idJogo`);

--
-- Constraints for table `amigos`
--
ALTER TABLE `amigos`
  ADD CONSTRAINT `amigos_ibfk_1` FOREIGN KEY (`IdCriador`) REFERENCES `usuarios` (`IdUsuario`),
  ADD CONSTRAINT `amigos_ibfk_2` FOREIGN KEY (`IdDestino`) REFERENCES `usuarios` (`IdUsuario`);

--
-- Constraints for table `participantes`
--
ALTER TABLE `participantes`
  ADD CONSTRAINT `participantes_ibfk_1` FOREIGN KEY (`idAgendamento`) REFERENCES `agendamentos` (`idAgendamento`),
  ADD CONSTRAINT `participantes_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`);

DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`localhost` EVENT `verifica_agendamentos` ON SCHEDULE EVERY 1 MINUTE STARTS '2023-11-02 23:04:35' ON COMPLETION NOT PRESERVE ENABLE DO BEGIN
  DECLARE data_atual DATETIME;
  SET data_atual = NOW();
  UPDATE agendamentos
  SET status = 2
  WHERE terminaEm < data_atual;
END$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
