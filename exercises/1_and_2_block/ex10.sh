#!/bin/bash

cd amostra
data=`date +%F`

for item in `ls *.jpg`
do
	mv $item ${data}-${item}
done 
