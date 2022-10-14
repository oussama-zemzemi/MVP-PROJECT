-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema RBKTN5
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema RBKTN5
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `RBKTN5` DEFAULT CHARACTER SET utf8 ;
USE `RBKTN5` ;

-- -----------------------------------------------------
-- Table `RBKTN5`.`cohorts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RBKTN5`.`cohorts` (
  `idcohorts` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `phase` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcohorts`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RBKTN5`.`students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RBKTN5`.`students` (
  `idstudents` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `feedback` VARCHAR(255) NULL,
  `fidcohort` INT NOT NULL,
  PRIMARY KEY (`idstudents`, `fidcohort`),
  INDEX `fk_students_cohorts_idx` (`fidcohort` ASC) VISIBLE,
  CONSTRAINT `fk_students_cohorts`
    FOREIGN KEY (`fidcohort`)
    REFERENCES `RBKTN5`.`cohorts` (`idcohorts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RBKTN5`.`staff`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RBKTN5`.`staff` (
  `idstaff` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `feedback` VARCHAR(255) NULL,
  `ficohort` INT NOT NULL,
  PRIMARY KEY (`idstaff`, `ficohort`),
  INDEX `fk_staff_cohorts1_idx` (`ficohort` ASC) VISIBLE,
  CONSTRAINT `fk_staff_cohorts1`
    FOREIGN KEY (`ficohort`)
    REFERENCES `RBKTN5`.`cohorts` (`idcohorts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;