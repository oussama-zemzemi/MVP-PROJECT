-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema anime_storm
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema anime_storm
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `anime_storm` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `anime_storm` ;

-- -----------------------------------------------------
-- Table `anime_storm`.`AnimeMovies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `anime_storm`.`AnimeMovies` (
  `idAnimeMovies` INT NOT NULL AUTO_INCREMENT,
  `Released` DATE NOT NULL,
  `Genre` VARCHAR(45) NOT NULL,
  `Casts` VARCHAR(45) NOT NULL,
  `Country` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idAnimeMovies`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `anime_storm`.`Anime series`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `anime_storm`.`Anime series` (
  `idanime series` INT NOT NULL AUTO_INCREMENT,
  `Released` VARCHAR(45) NOT NULL,
  `Genre` VARCHAR(45) NOT NULL,
  `Casts` VARCHAR(45) NOT NULL,
  `Country` VARCHAR(45) NOT NULL,
  `AnimeMovies_idAnimeMovies` INT NOT NULL,
  PRIMARY KEY (`idanime series`, `AnimeMovies_idAnimeMovies`),
  INDEX `fk_Anime series_AnimeMovies_idx` (`AnimeMovies_idAnimeMovies` ASC) VISIBLE,
  CONSTRAINT `fk_Anime series_AnimeMovies`
    FOREIGN KEY (`AnimeMovies_idAnimeMovies`)
    REFERENCES `anime_storm`.`AnimeMovies` (`idAnimeMovies`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
