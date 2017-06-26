#!/usr/bin/env bash

server=ubuntu@52.59.71.133

# ng build --prod


scp -r dist/* ${server}:notify-angular2
