-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-11-2023 a las 22:08:49
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pqrs_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

CREATE TABLE `registros` (
  `Tipo_documento` varchar(20) NOT NULL,
  `Numero_documento` int(20) NOT NULL,
  `Nombre_Completo` varchar(50) NOT NULL,
  `Correo` varchar(50) NOT NULL,
  `Celular` int(20) NOT NULL,
  `Contraseña` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registros`
--

INSERT INTO `registros` (`Tipo_documento`, `Numero_documento`, `Nombre_Completo`, `Correo`, `Celular`, `Contraseña`) VALUES
('CE', 123, 'aalfredo', 'diegoalexandergarciagil@gmail.com', 333, '4444'),
('CC', 321, 'Paco', 'pacoelscio@gmail.com', 56789, '9999'),
('TI', 1111, 'pedro', 'pedro@iutlooj', 2147483647, '1111');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_pqrs`
--

CREATE TABLE `tabla_pqrs` (
  `ID` int(200) NOT NULL,
  `Tipo_Pqrs` varchar(20) NOT NULL,
  `Asunto` varchar(100) NOT NULL,
  `Mensaje` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tabla_pqrs`
--

INSERT INTO `tabla_pqrs` (`ID`, `Tipo_Pqrs`, `Asunto`, `Mensaje`) VALUES
(25, 'Sugerencia', 'MAÑANA NO VAMOS', 'HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `registros`
--
ALTER TABLE `registros`
  ADD PRIMARY KEY (`Numero_documento`);

--
-- Indices de la tabla `tabla_pqrs`
--
ALTER TABLE `tabla_pqrs`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tabla_pqrs`
--
ALTER TABLE `tabla_pqrs`
  MODIFY `ID` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
