---
title: Maintenance and Troubleshooting
description: Common issues, routine maintenance and service information for the D5 series meters
---

# Maintenance and Troubleshooting

## Common Issues

| Symptom | Check and action |
| --- | --- |
| Power indicator is off | Have a professional check the power supply, voltage range and wiring. Disconnect power and verify it is de-energized before checking the wiring. Never open the enclosure for self-repair. |
| Wi-Fi cannot connect | Confirm 2.4 GHz Wi-Fi coverage, network name and password, and check phone permissions, Bluetooth and the device serial number (SN). |
| Network indicator blinks slowly but no cloud data | The meter may be connected to the router or have obtained an IP address but is not yet connected to the cloud platform. Check whether the network can reach the internet, the account binding status and the data timestamp. |
| Current reads zero or deviates significantly | With the power off, check whether the CT is closed, whether the plug is connected, whether the CT is clamped on a single conductor, and whether the 100 A or 400 A part number matches. |
| Power direction is wrong or three-phase data is abnormal | Judge against the actual generation and consumption conditions. With the power off, verify the CT direction and the phase correspondence between L1, L2, L3 and each CT. |
| LoRa cannot connect | Confirm that a WR model and a compatible 868 MHz system are used, and check the status and firmware configuration of the paired device. W models do not support LoRa. |
| Data updates slower than expected | Distinguish between the internal refresh, collection and upload intervals, and check the data timestamp and upload configuration. |
| Not back online after an upgrade | Record the indicator status and firmware version, confirm the network and power supply, and contact service personnel. |

For indicator status, see [Appearance, Interfaces and Indicators](overview/appearance.md#indicators). For specifications and upload intervals, see [Parameter Comparison](parameter-comparison.md).

## Routine Maintenance

- Periodically check the enclosure, rail fastener, terminals, CT latches and harness, and confirm that data is continuous. Disconnect power before cleaning or electrical maintenance.
- Confirm that part numbers match when replacing a meter or CT, and re-verify power-on and metering afterwards.
- Stop using damaged devices. Investigate the root cause instead of repeatedly resetting the device.
- When contacting service personnel, provide the model, part number, SN, CT specification, firmware version, time of failure, indicator status and wiring photos. For service channels, see [Contact Information](contact.md).
