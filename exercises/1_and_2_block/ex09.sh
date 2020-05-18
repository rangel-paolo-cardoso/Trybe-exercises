#!/bin/bash

var1=$1

if [ -d $var1 ]
then
	echo "O $var1 tem `ls -l $var1 | wc -l` arquivos."
else
	echo "O argumento $var1 não é um diretório."
fi
