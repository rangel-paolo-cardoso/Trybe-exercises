#!/bin/bash

var1=$1

if [ -f $var1 ]
then
	echo "$var1 é um arquivo comum."
elif [ -d $var1 ]
then
	echo "$var1 é um diretório."
	ls -l $var1
else
	echo "$var1 é qualquer outra tipo de arquivo."
fi
