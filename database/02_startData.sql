USE ligaPilkarska;

-- -----------------------------------------------------
-- TRENERZY
-- -----------------------------------------------------

INSERT INTO trenerzy
(imie_trenera, nazwisko_trenera, narodowosc_trenera, data_urodzenia_trenera)
VALUES
('Xabi', 'Alonso', 'Hiszpania', '1981-11-25'),
('Hansi', 'Flick', 'Niemcy', '1965-02-24'),
('Pep', 'Guardiola', 'Hiszpania', '1971-01-18'),
('Michael', 'Carrick', 'Anglia', '1981-07-28'),
('Luis', 'Enrique', 'Hiszpania', '1970-05-08'),
('Vincent', 'Kompany', 'Belgia', '1986-04-10');


-- -----------------------------------------------------
-- STADIONY
-- -----------------------------------------------------

INSERT INTO stadiony
(nazwa_stadionu, lokalizacja_stadionu, pojemnosc_stadionu)
VALUES
('Santiago Bernabeu', 'Madryt', 81044),
('Spotify Camp Nou', 'Barcelona', 99354),
('Etihad Stadium', 'Manchester', 53400),
('Old Trafford', 'Manchester', 74197),
('Parc des Princes', 'Paryz', 47929),
('Allianz Arena', 'Monachium', 75024);

-- -----------------------------------------------------
-- DRUZYNY
-- -----------------------------------------------------

INSERT INTO druzyny
(nazwa_druzyny, miasto_druzyny, stadion, trener)
VALUES
('Real Madryt', 'Madryt', 1, 1),
('FC Barcelona', 'Barcelona', 2, 2),
('Manchester City', 'Manchester', 3, 3),
('Manchester United', 'Manchester', 4, 4),
('PSG', 'Paryz', 5, 5),
('Bayern Monachium', 'Monachium', 6, 6);

-- -----------------------------------------------------
-- ZAWODNICY REAL MADRYT
-- -----------------------------------------------------

INSERT INTO zawodnicy
(imie_zawodnika, nazwisko_zawodnika, pozycja_zawodnika,
numer_zawodnika, data_urodzenia_zawodnika,
narodowosc_zawodnika, druzyna_zawodnika)
VALUES
('Thibaut', 'Courtois', 'Bramkarz', 1, '1992-05-11', 'Belgia', 1),
('Dani', 'Carvajal', 'Obrońca', 2, '1992-01-11', 'Hiszpania', 1),
('Antonio', 'Rudiger', 'Obrońca', 22, '1993-03-03', 'Niemcy', 1),
('Eder', 'Militao', 'Obrońca', 3, '1998-01-18', 'Brazylia', 1),
('Ferland', 'Mendy', 'Obrońca', 23, '1995-06-08', 'Francja', 1),
('Jude', 'Bellingham', 'Pomocnik', 5, '2003-06-29', 'Anglia', 1),
('Federico', 'Valverde', 'Pomocnik', 8, '1998-07-22', 'Urugwaj', 1),
('Aurelien', 'Tchouameni', 'Pomocnik', 14, '2000-01-27', 'Francja', 1),
('Eduardo', 'Camavinga', 'Pomocnik', 6, '2002-11-10', 'Francja', 1),
('Arda', 'Guler', 'Pomocnik', 15, '2005-02-25', 'Turcja', 1),
('Vinicius', 'Junior', 'Napastnik', 7, '2000-07-12', 'Brazylia', 1),
('Kylian', 'Mbappe', 'Napastnik', 9, '1998-12-20', 'Francja', 1),
('Rodrygo', 'Goes', 'Napastnik', 11, '2001-01-09', 'Brazylia', 1),
('Endrick', 'Napastnik', 'Napastnik', 16, '2006-07-21', 'Brazylia', 1),
('Brahim', 'Diaz', 'Napastnik', 21, '1999-08-03', 'Maroko', 1);

-- -----------------------------------------------------
-- ZAWODNICY FC BARCELONA
-- -----------------------------------------------------

INSERT INTO zawodnicy
(imie_zawodnika, nazwisko_zawodnika, pozycja_zawodnika,
numer_zawodnika, data_urodzenia_zawodnika,
narodowosc_zawodnika, druzyna_zawodnika)
VALUES
('Marc-Andre', 'ter Stegen', 'Bramkarz', 1, '1992-04-30', 'Niemcy', 2),
('Jules', 'Kounde', 'Obrońca', 23, '1998-11-12', 'Francja', 2),
('Ronald', 'Araujo', 'Obrońca', 4, '1999-03-07', 'Urugwaj', 2),
('Alejandro', 'Balde', 'Obrońca', 3, '2003-10-18', 'Hiszpania', 2),
('Pau', 'Cubarsi', 'Obrońca', 2, '2007-01-22', 'Hiszpania', 2),
('Pedri', 'Pomocnik', 'Pomocnik', 8, '2002-11-25', 'Hiszpania', 2),
('Gavi', 'Pomocnik', 'Pomocnik', 6, '2004-08-05', 'Hiszpania', 2),
('Frenkie', 'de Jong', 'Pomocnik', 21, '1997-05-12', 'Holandia', 2),
('Dani', 'Olmo', 'Pomocnik', 20, '1998-05-07', 'Hiszpania', 2),
('Fermin', 'Lopez', 'Pomocnik', 16, '2003-05-11', 'Hiszpania', 2),
('Lamine', 'Yamal', 'Napastnik', 19, '2007-07-13', 'Hiszpania', 2),
('Robert', 'Lewandowski', 'Napastnik', 9, '1988-08-21', 'Polska', 2),
('Raphinha', 'Napastnik', 'Napastnik', 11, '1996-12-14', 'Brazylia', 2),
('Ferran', 'Torres', 'Napastnik', 7, '2000-02-29', 'Hiszpania', 2),
('Ansu', 'Fati', 'Napastnik', 10, '2002-10-31', 'Hiszpania', 2);

-- -----------------------------------------------------
-- ZAWODNICY MANCHESTER CITY
-- -----------------------------------------------------

INSERT INTO zawodnicy
(imie_zawodnika, nazwisko_zawodnika, pozycja_zawodnika,
numer_zawodnika, data_urodzenia_zawodnika,
narodowosc_zawodnika, druzyna_zawodnika)
VALUES
('Ederson', 'Moraes', 'Bramkarz', 31, '1993-08-17', 'Brazylia', 3),
('Kyle', 'Walker', 'Obrońca', 2, '1990-05-28', 'Anglia', 3),
('Ruben', 'Dias', 'Obrońca', 3, '1997-05-14', 'Portugalia', 3),
('John', 'Stones', 'Obrońca', 5, '1994-05-28', 'Anglia', 3),
('Josko', 'Gvardiol', 'Obrońca', 24, '2002-01-23', 'Chorwacja', 3),
('Rodri', 'Pomocnik', 'Pomocnik', 16, '1996-06-22', 'Hiszpania', 3),
('Kevin', 'De Bruyne', 'Pomocnik', 17, '1991-06-28', 'Belgia', 3),
('Bernardo', 'Silva', 'Pomocnik', 20, '1994-08-10', 'Portugalia', 3),
('Phil', 'Foden', 'Pomocnik', 47, '2000-05-28', 'Anglia', 3),
('Mateo', 'Kovacic', 'Pomocnik', 8, '1994-05-06', 'Chorwacja', 3),
('Jack', 'Grealish', 'Napastnik', 10, '1995-09-10', 'Anglia', 3),
('Erling', 'Haaland', 'Napastnik', 9, '2000-07-21', 'Norwegia', 3),
('Jeremy', 'Doku', 'Napastnik', 11, '2002-05-27', 'Belgia', 3),
('Julian', 'Alvarez', 'Napastnik', 19, '2000-01-31', 'Argentyna', 3),
('Savinho', 'Napastnik', 'Napastnik', 26, '2004-04-10', 'Brazylia', 3);

-- -----------------------------------------------------
-- ZAWODNICY MANCHESTER UNITED
-- -----------------------------------------------------

INSERT INTO zawodnicy
(imie_zawodnika, nazwisko_zawodnika, pozycja_zawodnika,
numer_zawodnika, data_urodzenia_zawodnika,
narodowosc_zawodnika, druzyna_zawodnika)
VALUES
('Andre', 'Onana', 'Bramkarz', 24, '1996-04-02', 'Kamerun', 4),
('Diogo', 'Dalot', 'Obrońca', 20, '1999-03-18', 'Portugalia', 4),
('Lisandro', 'Martinez', 'Obrońca', 6, '1998-01-18', 'Argentyna', 4),
('Harry', 'Maguire', 'Obrońca', 5, '1993-03-05', 'Anglia', 4),
('Luke', 'Shaw', 'Obrońca', 23, '1995-07-12', 'Anglia', 4),
('Bruno', 'Fernandes', 'Pomocnik', 8, '1994-09-08', 'Portugalia', 4),
('Casemiro', 'Pomocnik', 'Pomocnik', 18, '1992-02-23', 'Brazylia', 4),
('Kobbie', 'Mainoo', 'Pomocnik', 37, '2005-04-19', 'Anglia', 4),
('Mason', 'Mount', 'Pomocnik', 7, '1999-01-10', 'Anglia', 4),
('Christian', 'Eriksen', 'Pomocnik', 14, '1992-02-14', 'Dania', 4),
('Marcus', 'Rashford', 'Napastnik', 10, '1997-10-31', 'Anglia', 4),
('Rasmus', 'Hojlund', 'Napastnik', 9, '2003-02-04', 'Dania', 4),
('Alejandro', 'Garnacho', 'Napastnik', 17, '2004-07-01', 'Argentyna', 4),
('Amad', 'Diallo', 'Napastnik', 16, '2002-07-11', 'Wybrzeze Kosci Sloniowej', 4),
('Joshua', 'Zirkzee', 'Napastnik', 11, '2001-05-22', 'Holandia', 4);

-- -----------------------------------------------------
-- ZAWODNICY PSG
-- -----------------------------------------------------

INSERT INTO zawodnicy
(imie_zawodnika, nazwisko_zawodnika, pozycja_zawodnika,
numer_zawodnika, data_urodzenia_zawodnika,
narodowosc_zawodnika, druzyna_zawodnika)
VALUES
('Gianluigi', 'Donnarumma', 'Bramkarz', 1, '1999-02-25', 'Wlochy', 5),
('Achraf', 'Hakimi', 'Obrońca', 2, '1998-11-04', 'Maroko', 5),
('Marquinhos', 'Silva', 'Obrońca', 5, '1994-05-14', 'Brazylia', 5),
('Milan', 'Skriniar', 'Obrońca', 37, '1995-02-11', 'Slowacja', 5),
('Nuno', 'Mendes', 'Obrońca', 25, '2002-06-19', 'Portugalia', 5),
('Vitinha', 'Pomocnik', 'Pomocnik', 17, '2000-02-13', 'Portugalia', 5),
('Warren', 'Zaire-Emery', 'Pomocnik', 33, '2006-03-08', 'Francja', 5),
('Fabian', 'Ruiz', 'Pomocnik', 8, '1996-04-03', 'Hiszpania', 5),
('Lee', 'Kang-in', 'Pomocnik', 19, '2001-02-19', 'Korea Poludniowa', 5),
('Joao', 'Neves', 'Pomocnik', 87, '2004-09-27', 'Portugalia', 5),
('Ousmane', 'Dembele', 'Napastnik', 10, '1997-05-15', 'Francja', 5),
('Goncalo', 'Ramos', 'Napastnik', 9, '2001-06-20', 'Portugalia', 5),
('Bradley', 'Barcola', 'Napastnik', 29, '2002-09-02', 'Francja', 5),
('Marco', 'Asensio', 'Napastnik', 11, '1996-01-21', 'Hiszpania', 5),
('Randal', 'Kolo Muani', 'Napastnik', 23, '1998-12-05', 'Francja', 5);

-- -----------------------------------------------------
-- ZAWODNICY BAYERN MONACHIUM
-- -----------------------------------------------------

INSERT INTO zawodnicy
(imie_zawodnika, nazwisko_zawodnika, pozycja_zawodnika,
numer_zawodnika, data_urodzenia_zawodnika,
narodowosc_zawodnika, druzyna_zawodnika)
VALUES
('Manuel', 'Neuer', 'Bramkarz', 1, '1986-03-27', 'Niemcy', 6),
('Alphonso', 'Davies', 'Obrońca', 19, '2000-11-02', 'Kanada', 6),
('Dayot', 'Upamecano', 'Obrońca', 2, '1998-10-27', 'Francja', 6),
('Kim', 'Min-jae', 'Obrońca', 3, '1996-11-15', 'Korea Poludniowa', 6),
('Noussair', 'Mazraoui', 'Obrońca', 40, '1997-11-14', 'Maroko', 6),
('Joshua', 'Kimmich', 'Pomocnik', 6, '1995-02-08', 'Niemcy', 6),
('Leon', 'Goretzka', 'Pomocnik', 8, '1995-02-06', 'Niemcy', 6),
('Jamal', 'Musiala', 'Pomocnik', 42, '2003-02-26', 'Niemcy', 6),
('Aleksandar', 'Pavlovic', 'Pomocnik', 45, '2004-05-03', 'Niemcy', 6),
('Konrad', 'Laimer', 'Pomocnik', 27, '1997-05-27', 'Austria', 6),
('Leroy', 'Sane', 'Napastnik', 10, '1996-01-11', 'Niemcy', 6),
('Harry', 'Kane', 'Napastnik', 9, '1993-07-28', 'Anglia', 6),
('Kingsley', 'Coman', 'Napastnik', 11, '1996-06-13', 'Francja', 6),
('Serge', 'Gnabry', 'Napastnik', 7, '1995-07-14', 'Niemcy', 6),
('Mathys', 'Tel', 'Napastnik', 39, '2005-04-27', 'Francja', 6);

-- -----------------------------------------------------
-- MECZE
-- -----------------------------------------------------

INSERT INTO mecze
(gospodarze_id, goscie_id, stadion_id, data_meczu,
runda_rozgrywek, gospodarze_gole, goscie_gole)
VALUES
(1, 2, 1, '2026-03-10', 1, 3, 1),
(3, 4, 3, '2026-03-11', 1, 2, 2),
(5, 6, 5, '2026-03-12', 1, 1, 0),
(1, 3, 1, '2026-03-18', 2, 2, 0),
(2, 4, 2, '2026-03-19', 2, 1, 1),
(6, 5, 6, '2026-03-20', 2, 2, 2),
(1, 5, 1, '2026-04-02', 3, 4, 2),
(2, 6, 2, '2026-04-03', 3, 0, 0),
(3, 5, 3, '2026-04-04', 3, 3, 1),
(4, 6, 4, '2026-04-05', 3, 1, 1);

-- -----------------------------------------------------
-- SEDZIOWIE
-- -----------------------------------------------------

INSERT INTO sedziowie
(imie_sedziego, nazwisko_sedziego, narodowosc_sedziego)
VALUES
('Szymon', 'Marciniak', 'Polska'),
('Michael', 'Oliver', 'Anglia'),
('Daniele', 'Orsato', 'Wlochy'),
('Clement', 'Turpin', 'Francja');


-- -----------------------------------------------------
-- SEDZIOWIE MECZOW
-- -----------------------------------------------------

INSERT INTO sedziowie_meczow
(mecz_id, sedzia_id, rola)
VALUES
(1, 1, 'Glowny'),
(1, 2, 'VAR'),
(2, 3, 'Glowny'),
(2, 4, 'VAR'),
(3, 1, 'Glowny'),
(4, 2, 'Glowny'),
(5, 3, 'Glowny'),
(6, 4, 'Glowny'),
(7, 1, 'Glowny'),
(8, 2, 'Glowny'),
(9, 3, 'Glowny'),
(10, 4, 'Glowny');