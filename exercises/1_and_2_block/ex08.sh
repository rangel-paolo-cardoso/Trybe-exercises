#!/bin/bash

var1=$@

for file in $var1
do
	if [ -f $file ]
	then
		echo "$var1 é um arquivo comum."
	elif [ -d $file ]
	then
		echo "$var1 é um diretório."
	else
		echo "$var1 é qualquer outra tipo de arquivo."
	fi
	ls -l $file
done
