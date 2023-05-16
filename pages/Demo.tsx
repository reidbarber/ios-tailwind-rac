import { useState } from "react";
import { Switch } from "./components/Switch";
import { TableView, Row, Detail, Thumbnail, Title } from "./components/TableView";
import { Airplane } from "./symbols/Airplane";
import { SearchField } from "./components/SearchField";

export default function Demo() {
  let [airplaneMode, setAirplaneMode] = useState(false);
  let [vpn, setVpn] = useState(false);

  return (
    <div className="bg-ios-dark-surface p-4 text-ios-light-surface h-full">
      <SearchField />
      <TableView aria-label="Settings" selectionMode="none">
        <Row id="airplane-mode">
          {/* <Thumbnail backgroundColor="os-system-airplane-mode-symbol">
            <Airplane />
          </Thumbnail> */}
          <Title>Airplane Mode</Title>
          <Switch isSelected={airplaneMode} onChange={setAirplaneMode} />
        </Row>
        <Row id="wifi" hasChildItems>
          <Title>Wifi</Title>
          <Detail>Guest</Detail>
        </Row>
        <Row id="bluetooth" hasChildItems>
          <Title>Bluetooth</Title>
          <Detail>On</Detail>
        </Row>
        <Row id="cellular" hasChildItems>Cellular</Row>
        <Row id="vpn">
          <Title>VPN</Title>
          <Switch isSelected={vpn} onChange={setVpn} />
        </Row>
      </TableView>
      <TableView selectionMode="none">
        <Row id="bluetooth" hasChildItems>
          Notifications
        </Row>
        <Row id="soundsandhaptics" hasChildItems>
          Sounds & Haptics
        </Row>
        <Row id="focus" hasChildItems>
          Focus
        </Row>
        <Row id="screentime" hasChildItems>
          Screen Time
        </Row>
      </TableView>
    </div>
  );
}
