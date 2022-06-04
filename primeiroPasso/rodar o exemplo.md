# Rodando em container sem a necessidade de fazer nenhuma instalação

## Comando docker

docker run -d --rm -p 80:80 --name aulaphp2 -v "$PWD":/var/www/html php:7.2-apache
