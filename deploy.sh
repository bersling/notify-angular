#!/usr/bin/env bash

server=ubuntu@35.158.213.131

ng build --prod

scp -r dist/* ${server}:notify-angular2
scp notify-angular2.gif ${server}:notify-angular2/notify-angular2.gif
