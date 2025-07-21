-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21/07/2025 às 14:35
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `design_odyssey`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `administradores`
--

CREATE TABLE `administradores` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `nivel_acesso` enum('suporte','moderador','superadmin') DEFAULT 'suporte',
  `ultimo_login` datetime DEFAULT NULL,
  `ip_acesso` varchar(45) DEFAULT NULL,
  `status` enum('ativo','inativo') DEFAULT 'ativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `administradores`
--

INSERT INTO `administradores` (`id`, `nome`, `email`, `senha`, `nivel_acesso`, `ultimo_login`, `ip_acesso`, `status`) VALUES
(7, 'jessi', 'jessi@designodyssey.com', '$2y$10$Ac.yGShkJGq8bhqcaOFhGuLYUpjluiANsXl64ZrJwVCc43ilutyhO', 'superadmin', NULL, NULL, 'ativo'),
(8, 'designodyssey', 'designodyssey@gmail.com', '$2y$10$01csuoFTfZ3kV7XxhlgRzOF10KiFcb6sXkZ8iW5ZugS7KR7DSgjp2', 'superadmin', NULL, NULL, 'ativo');

-- --------------------------------------------------------

--
-- Estrutura para tabela `avaliacoes`
--

CREATE TABLE `avaliacoes` (
  `id` int(11) NOT NULL,
  `id_servico` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `nota` tinyint(1) NOT NULL CHECK (`nota` between 1 and 5),
  `comentario` text DEFAULT NULL,
  `data_avaliacao` datetime DEFAULT current_timestamp(),
  `resposta_designer` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `nome` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `nome`) VALUES
(1, 'web'),
(2, 'grafico'),
(3, 'logotipo'),
(4, 'digital');

-- --------------------------------------------------------

--
-- Estrutura para tabela `perfis`
--

CREATE TABLE `perfis` (
  `id_perfil` int(11) NOT NULL,
  `id_usuarios` int(11) NOT NULL,
  `nome_exibicao` varchar(50) DEFAULT NULL,
  `foto` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `perfis`
--

INSERT INTO `perfis` (`id_perfil`, `id_usuarios`, `nome_exibicao`, `foto`) VALUES
(3, 1, 'Luisa Mel', 'luisaMel.png');

-- --------------------------------------------------------

--
-- Estrutura para tabela `rl_usuarios_perfis`
--

CREATE TABLE `rl_usuarios_perfis` (
  `id` int(11) NOT NULL,
  `id_usuarios` int(11) NOT NULL,
  `id_perfis` int(11) NOT NULL,
  `tipo` enum('designer','cliente') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `servicos`
--

CREATE TABLE `servicos` (
  `id` int(11) NOT NULL,
  `id_freelancer` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL COMMENT 'Ex: "Criarei um logotipo minimalista"',
  `descricao` text NOT NULL,
  `categoria` enum('web','grafico','logotipo','digital') NOT NULL,
  `preco_base` decimal(10,2) NOT NULL COMMENT 'Ex: 270.00 (valor mostrado como "A partir de")',
  `pacotes` text DEFAULT NULL COMMENT 'JSON com pacotes de serviço',
  `data_publicacao` datetime DEFAULT current_timestamp(),
  `destaque` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `servicos`
--

INSERT INTO `servicos` (`id`, `id_freelancer`, `id_categoria`, `titulo`, `descricao`, `categoria`, `preco_base`, `pacotes`, `data_publicacao`, `destaque`) VALUES
(18, 2, 3, 'Logotipo', 'fsvfsvd', 'logotipo', 500.00, '500', '2025-07-16 05:13:34', 0),
(19, 1, 3, 'Logotipo', 'fvfv', 'logotipo', 500.00, '23432', '2025-07-16 05:22:32', 0),
(20, 1, 3, 'Logotipo', 'Logotipo legal', 'logotipo', 500.00, 'Otimos pacotes', '2025-07-17 02:57:05', 0),
(21, 1, 2, 'Logotipo', 'bugada', 'grafico', 400.00, 'basico', '2025-07-19 03:38:29', 0),
(28, 1, 3, 'wef8g8', 'iwefg', 'logotipo', 133.00, 'weiyhfbc', '2025-07-19 05:44:36', 0),
(29, 2, 3, 'Logo profissional de empresa', 'Muito boa', 'logotipo', 1000.00, 'Duas logos ', '2025-07-19 05:49:59', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `tipo` enum('designer','cliente') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `tipo`) VALUES
(1, 'Luisa M.', 'luisa@exemplo.com', '$2y$10$Q4j532l4scjHNOzVe1Xr1ONW2vLQTZcIT3wVmLmKl/uiImEQbUw2S', 'designer'),
(2, 'João', 'Joao@exemplo.com', '$2y$10$83Gr51xIiP56/kJkEo7zIe95/qvQrm4dnlngrhqlyoAXLyPTLqAIu', 'designer'),
(3, 'Julia m.', 'ju1lia@exemplo.com', '$2y$10$8YXEyKdLqpaXup3XKrvIyeiuKe7mBAQWZl3LYzzB/03GCxW.EynRO', 'designer'),
(4, 'Marco', 'Marco@designodyssey.com', '$2y$10$u24zrXZoxIt6PV23wcv0A.GWTfAG5x2pzOifI1isQir5/kmUpYxgu', 'cliente'),
(5, 'Marco', 'pvzgw2isgood@gmail.com', '$2y$10$duVsOyyuOSDNOKit2BO7JeunHx2CLu9StO/CF1eUdG/Fj.F5SyjPu', 'cliente'),
(7, 'Luana', 'luanaluisa@exemplo.com', '$2y$10$JiFLc9TNwGQHMdP5niwuZu.xi4V8X3cbRFxiHQJUnLDE7C3./mEVW', 'cliente'),
(9, 'Helena', 'helena@gmaiil.com', '$2y$10$CDZKqzLLrNVCkKVTPMTv2eQywPbNWq8rK8IvmkGn8TfLmbuAssUYC', 'cliente');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices de tabela `avaliacoes`
--
ALTER TABLE `avaliacoes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_servico` (`id_servico`),
  ADD KEY `id_cliente` (`id_cliente`);

--
-- Índices de tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Índices de tabela `perfis`
--
ALTER TABLE `perfis`
  ADD PRIMARY KEY (`id_perfil`) USING BTREE,
  ADD KEY `id_usuarios` (`id_usuarios`);

--
-- Índices de tabela `rl_usuarios_perfis`
--
ALTER TABLE `rl_usuarios_perfis`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_usuarios` (`id_usuarios`,`id_perfis`);

--
-- Índices de tabela `servicos`
--
ALTER TABLE `servicos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_freelancer` (`id_freelancer`) USING BTREE,
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `administradores`
--
ALTER TABLE `administradores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `avaliacoes`
--
ALTER TABLE `avaliacoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `perfis`
--
ALTER TABLE `perfis`
  MODIFY `id_perfil` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `rl_usuarios_perfis`
--
ALTER TABLE `rl_usuarios_perfis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `servicos`
--
ALTER TABLE `servicos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `avaliacoes`
--
ALTER TABLE `avaliacoes`
  ADD CONSTRAINT `avaliacoes_ibfk_1` FOREIGN KEY (`id_servico`) REFERENCES `servicos` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `avaliacoes_ibfk_2` FOREIGN KEY (`id_cliente`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `perfis`
--
ALTER TABLE `perfis`
  ADD CONSTRAINT `perfis_ibfk_1` FOREIGN KEY (`id_usuarios`) REFERENCES `usuarios` (`id`);

--
-- Restrições para tabelas `servicos`
--
ALTER TABLE `servicos`
  ADD CONSTRAINT `servicos_ibfk_1` FOREIGN KEY (`id_freelancer`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `servicos_ibfk_2` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
