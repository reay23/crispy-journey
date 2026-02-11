import sys
from time import sleep
import time

def printlyrics():
  print()
  lines = [
    ("You know, You know", 0.15),
    ("Where you are with", 0.13),
    ("You know where you are with", 0.13),
    ("Floor collapsing",0.1),
    ("Floating bouncing back", 0.15),
    ("And one day", 0.2),
    ("I am gonna grow wings", 0.15),
    ("A chemical reaction", 0.17),
  ]
  delays = [0.2, 1.5, 1.1, 0.5, 0.5, 1, 1, 5]
  for i, (line, char_delay) in enumerate(lines):
    for char in line:
      print(char, end='')
      sys.stdout.flush()
      sleep(char_delay)
    print()
    time.sleep(delays[i])

printlyrics()