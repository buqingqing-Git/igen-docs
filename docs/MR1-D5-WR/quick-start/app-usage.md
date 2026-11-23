---
title: App Device Adding and Network Configuration
description: Adding, configuring and viewing the D5 series meters with Energy Ease or SOLARMAN Smart
---

# App Device Adding and Network Configuration

Scan the QR codes to download Energy Ease or SOLARMAN Smart, then complete registration and login. For Wi-Fi configuration, make sure the installation location has stable 2.4 GHz Wi-Fi coverage and have the network name and password ready. For LoRa, choose a LoRa-enabled model and use Energy Ease.

| Energy Ease download | SOLARMAN Smart download |
| --- | --- |
| <img src={require('./img/qr-energyease.png').default} alt="Energy Ease download QR code" style={{width: '150px', maxHeight: 'none'}} /> | <img src={require('./img/qr-unienergy.png').default} alt="SOLARMAN Smart download QR code" style={{width: '150px', maxHeight: 'none'}} /> |

## Energy Ease Configuration

:::info Information
Interface example version: **V2.2.10**. Product or device names in the screenshots are interface examples only. When adding a device, select the device that matches the serial number (SN) of your D5 meter.
:::

1. Open Energy Ease, register and log in.
2. On the home page, tap **+ → Add Device**. After enabling location services, you can select the D5 meter matching the SN under **Discover Devices**; or go to **Manual Add**, select the specified brand, scan the product QR code or enter the SN manually.

   | Home page | Add device | Scan guide |
   | --- | --- | --- |
   | <img src={require('./img/app-ee-home.png').default} alt="Energy Ease home page" style={{width: '180px', maxHeight: 'none'}} /> | <img src={require('./img/app-ee-add-device.png').default} alt="Energy Ease add device" style={{width: '180px', maxHeight: 'none'}} /> | <img src={require('./img/app-ee-scan.png').default} alt="Energy Ease scan guide" style={{width: '180px', maxHeight: 'none'}} /> |

3. On the **Access Mode** page, choose the appropriate communication method:
   - **Wi-Fi access**: for environments with stable Wi-Fi coverage. Select the network, enter the password and confirm.
   - **LoRa wireless access**: for long-distance scenarios or areas without Wi-Fi coverage, used together with a LoRa gateway or micro-storage device. Select the device to bind and establish the connection.

   | Access mode | Select Wi-Fi | LoRa wireless access |
   | --- | --- | --- |
   | <img src={require('./img/app-ee-access-mode.png').default} alt="Energy Ease access mode" style={{width: '180px', maxHeight: 'none'}} /> | <img src={require('./img/app-ee-wifi.png').default} alt="Energy Ease select Wi-Fi" style={{width: '180px', maxHeight: 'none'}} /> | <img src={require('./img/app-ee-lora-bind.png').default} alt="Energy Ease LoRa binding example" style={{width: '180px', maxHeight: 'none'}} /> |

   If the access mode is chosen incorrectly the first time, it can be changed in the settings on the device page.

4. After the connection succeeds, tap confirm to enter the device page, and select the corresponding device to view data.

   | Device list | Meter data |
   | --- | --- |
   | <img src={require('./img/app-ee-device-list.png').default} alt="Energy Ease device list" style={{width: '180px', maxHeight: 'none'}} /> | <img src={require('./img/app-meter-data.png').default} alt="Energy Ease meter data" style={{width: '180px', maxHeight: 'none'}} /> |

For more operations, see [Energy Ease Data Platform](../platform/energyease.md).

## SOLARMAN Smart Configuration

:::info Information
Interface example version: **V2.3.8**.
:::

1. Open SOLARMAN Smart, register and log in.
2. On the home page, tap **+ → Add Device** and select **Scan**. Scan the product QR code or enter the device SN manually to complete adding.
3. Go to network configuration, enter the Wi-Fi name and password, tap confirm, and wait for the configuration success message.

   | Home page | Add device | Network configuration |
   | --- | --- | --- |
   | <img src={require('./img/app-uni-home.png').default} alt="SOLARMAN Smart home page" style={{width: '180px', maxHeight: 'none'}} /> | <img src={require('./img/app-uni-collector.png').default} alt="SOLARMAN Smart add device" style={{width: '180px', maxHeight: 'none'}} /> | <img src={require('./img/app-uni-network.png').default} alt="SOLARMAN Smart network configuration" style={{width: '180px', maxHeight: 'none'}} /> |

4. After the connection succeeds, tap confirm and view the data on the device page.
5. Open **Device Details** and check the device configuration against the actual installation. The configuration page includes the installation status, installation location, CT direction and current ratio. If the actual parameters are unclear, confirm with the installer.

For CT specifications of each D5 series model, see [Parameter Comparison](../parameter-comparison.md).

For more operations, see [SOLARMAN Smart Data Platform](../platform/unienergy.md).
