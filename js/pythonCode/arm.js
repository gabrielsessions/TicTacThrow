let armCode = `# MicroPython for LEGO Hardware (LEGO Education's SPIKE Prime)
from spike import PrimeHub, LightMatrix, Button, StatusLight, ForceSensor, MotionSensor, Speaker, ColorSensor, App, DistanceSensor, Motor, MotorPair
from spike.control import wait_for_seconds, wait_until, Timer

# Initializing Motors
hub = PrimeHub()
angle = Motor('A')
power = Motor('B')

# Values to set (Angle and speed)
speedVal = CLOUD[Angle]
angleVal = CLOUD[Power]

# Set up
angle.run_to_position(0, 'shortest path', 50)
power.run_to_position(0, 'shortest path', 100)

# Launch
angle.run_to_position(0, 'shortest path', angleVal)
power.run_to_position(90, 'clockwise', speedVal)

# Reset
angle.run_to_position(0, 'shortest path', 50)
power.run_to_position(0, 'shortest path', 100)`;