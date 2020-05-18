#!/bin/bash

diretorio=$1
extensao=$2

data=`date +%F`

cd $diretorio

#modifica nome dos arquivos
for item in `ls *.$extensao`
do
	echo "Renomeando $item para ${data}-${item}"
	mv $item ${data}-${item}
done 
