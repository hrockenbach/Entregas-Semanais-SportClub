create database SportClub;

use SportClub;

create table usuarios(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome_completo varchar (255) NOT NULL,
	email varchar (255) NOT NULL,
    senha varchar (8) NOT NULL,
    data_nascimento date NOT NULL,
    seguidores text,
    seguindo text
);

alter table usuarios add column;

drop table usuarios;

SELECT * FROM usuarios;
 
create table postagens(
	nome_grupo varchar (50) NOT NULL,
	descricao varchar (255) NOT NULL
);
 
alter table postagens add column id INT AUTO_INCREMENT PRIMARY KEY;
 
alter table postagens add column imagem VARCHAR(255);
 
select * from postagens;