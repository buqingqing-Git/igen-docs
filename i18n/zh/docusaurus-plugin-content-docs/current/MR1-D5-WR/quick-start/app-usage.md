---
title: App 添加设备与配网
description: 使用 Energy Ease 或小麦智电添加、配网和查看 D5 系列电表
---

# App 添加设备与配网

扫描二维码下载 Energy Ease 或小麦智电，完成注册和登录。使用 Wi-Fi 配网时，请确认安装位置有稳定的 2.4 GHz Wi-Fi 覆盖，并准备好网络名称和密码。使用 LoRa 时，请选择支持 LoRa 的型号，并使用 Energy Ease。

| Energy Ease 下载 | 小麦智电（SOLARMAN Smart）下载 |
| --- | --- |
| <img src={require('./img/qr-energyease.png').default} alt="Energy Ease 下载二维码" style={{width: '150px', maxHeight: 'none'}} /> | <img src={require('./img/qr-unienergy.png').default} alt="小麦智电下载二维码" style={{width: '150px', maxHeight: 'none'}} /> |

## Energy Ease 配网

:::info 信息
界面示例版本：**V2.2.10**。截图中的产品或设备名称仅作界面示例，添加时请选择与实际 D5 电表序列号（SN）一致的设备。
:::

1. 打开 Energy Ease，注册并登录。
2. 在家庭页面点击 **+ → 添加设备**。开启定位后，可在 **发现设备** 中选择与 SN 对应的 D5 电表；也可进入 **手动添加**，选择指定品牌，扫描产品二维码或手动输入 SN。

   | 家庭页面 | 添加设备 | 扫码引导 |
   | --- | --- | --- |
   | <img src={require('./img/ee-home.png').default} alt="Energy Ease 家庭页面" style={{width: '180px', maxHeight: 'none'}} /> | <img src={require('./img/ee-add-device.png').default} alt="Energy Ease 添加设备" style={{width: '180px', maxHeight: 'none'}} /> | <img src={require('./img/ee-scan-guide.png').default} alt="Energy Ease 扫码引导" style={{width: '180px', maxHeight: 'none'}} /> |

3. 进入 **接入方式** 页面，选择合适的通信方式：
   - **Wi-Fi 接入**：适用于有稳定 Wi-Fi 覆盖的环境。选择网络、输入密码并确认。
   - **LoRa 无线接入**：适用于远距离或没有 Wi-Fi 覆盖的场景，需配合 LoRa 网关或微储设备。选择要绑定的设备，建立连接。

   | 接入方式 | 选择 Wi-Fi | LoRa 无线接入 |
   | --- | --- | --- |
   | <img src={require('./img/ee-access-mode.png').default} alt="Energy Ease 接入方式" style={{width: '180px', maxHeight: 'none'}} /> | <img src={require('./img/ee-wifi.png').default} alt="Energy Ease 选择 Wi-Fi" style={{width: '180px', maxHeight: 'none'}} /> | <img src={require('./img/ee-lora.png').default} alt="Energy Ease LoRa 绑定界面示例" style={{width: '180px', maxHeight: 'none'}} /> |

   首次选择的接入方式有误时，可在设备页面的设置中切换。

4. 连接成功后点击确认，进入设备页面，选择对应设备查看数据。

   | 设备列表 | 电表数据 |
   | --- | --- |
   | <img src={require('./img/ee-device-list.png').default} alt="Energy Ease 设备列表" style={{width: '180px', maxHeight: 'none'}} /> | <img src={require('./img/ee-meter-data.png').default} alt="Energy Ease 电表数据" style={{width: '180px', maxHeight: 'none'}} /> |

更多操作见 [Energy Ease 数据平台](../platform/energyease.md)。

## 小麦智电配网

:::info 信息
界面示例版本：**V2.3.8**。
:::

1. 打开小麦智电，注册并登录。
2. 在家庭页面点击 **+ → 添加设备**，选择 **扫一扫**。扫描产品二维码或手动输入设备 SN，完成添加。
3. 进入网络配置，输入 Wi-Fi 名称和密码，点击确认，等待配置成功提示。

   | 家庭页面 | 添加设备 | 网络配置 |
   | --- | --- | --- |
   | <img src={require('./img/uni-home.png').default} alt="小麦智电家庭页面" style={{width: '180px', maxHeight: 'none'}} /> | <img src={require('./img/uni-add-device.png').default} alt="小麦智电添加设备" style={{width: '180px', maxHeight: 'none'}} /> | <img src={require('./img/uni-network.png').default} alt="小麦智电网络配置" style={{width: '180px', maxHeight: 'none'}} /> |

4. 连接成功后点击确认，在设备页面查看数据。
5. 打开 **设备详情**，按实际安装情况核对设备配置。配置页示例包括安装情况、安装位置、互感器方向及电流比。不清楚实际参数时，请向安装人员确认。

<img src={require('./img/uni-device-config.png').default} alt="小麦智电设备配置界面示例" style={{width: '300px', maxHeight: 'none'}} />

D5 系列各型号的 CT 规格见[参数对比](../parameter-comparison.md)。

更多操作见[小麦智电数据平台](../platform/unienergy.md)。
