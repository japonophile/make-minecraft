#!/usr/bin/env python

# demo_script.py
#
# Copyright (C) 2015 Kano Computing Ltd.
# License: http://www.gnu.org/licenses/gpl-2.0.txt GNU General Public License v2
#
# A script to demonstrate the Minecraft world.

import minecraft.minecraft as minecraft
import time

mc = minecraft.Minecraft.create()

# Intro Text
INTRO_TEXT = [
    "Let's Make Minecraft!",
    "Use the W  A  S  D keys to move",
    "Use E to open your inventory",
    "To move between code and Minecraft, press TAB",
]

def introduction():
    for line in INTRO_TEXT:
        mc.postToChat(line)
        time.sleep(5)

# Main
introduction()
