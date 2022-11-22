import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //Pie Chart Settings
  startAngle = 30;
  explode = false;
  enableAnimation = false;

  legendSettings = {
    visible: false,
  };

  emptyPointSettings = {
    mode: 'Drop',
  };

  dataLabel = {
    visible: true,
    position: 'Inside',
    name: 'label',
    font: {
      fontWeight: '600',
    },
    connectorStyle: { length: '20px', type: 'Curve' },
  };

  tooltip = {
    enable: true,
    format: '<b>${point.x}</b><br><b>${point.y}%</b>',
  };

  testDataSet: {
    id: string;
    value: number;
    percentage: number;
    visible: boolean;
    label: string;
  }[] = [
    {
      id: 'd461ca9',
      value: 35792311,
      percentage: 4.25,
      visible: true,
      label: 'dasdasdasdasdsadasdasdasdas',
    },
    {
      id: 'e2727015805c7',
      value: 1188498,
      percentage: 0.14,
      visible: true,
      label: 'dasdasdasdsadasdasdas',
    },
    {
      id: 'a4800708e85',
      value: 460667920,
      percentage: 54.73,
      visible: true,
      label: '54.73 %',
    },
    {
      id: '57260c1ada9',
      value: 222404405,
      percentage: 26.42,
      visible: true,
      label: '26.42 %',
    },
    {
      id: '069400c37e33',
      value: 1292708,
      percentage: 0.15,
      visible: true,
      label: '0.15 %',
    },
    {
      id: '00286700c3f5aa',
      value: 321520,
      percentage: 0.04,
      visible: true,
      label: 'asdasdsadsads',
    },
    {
      id: '43ec00bb6967',
      value: 188943,
      percentage: 0.02,
      visible: true,
      label: '0.02 %',
    },
    {
      id: 'e36dbb4412',
      value: 9951,
      percentage: 0,
      visible: true,
      label: '0 %',
    },
    {
      id: '695e4c788',
      value: 97320033,
      percentage: 11.56,
      visible: true,
      label: '11.56 %',
    },
    {
      id: 'f9a81f42cb',
      value: 559297,
      percentage: 0.07,
      visible: true,
      label: '0.07 %',
    },
    {
      id: '36fc254a1',
      value: 1398157,
      percentage: 0.17,
      visible: true,
      label: '0.17 %',
    },
    {
      id: '40b00c28982',
      value: 838685,
      percentage: 0.1,
      visible: true,
      label: '0.1 %',
    },
    {
      id: '6166cc346a4',
      value: 2045529,
      percentage: 0.24,
      visible: true,
      label: '0.24 %',
    },
    {
      id: '66000c1f7e6',
      value: 139814,
      percentage: 0.02,
      visible: true,
      label: '%',
    },
    {
      id: 'e310c3229b',
      value: 869738,
      percentage: 0.1,
      visible: true,
      label: '0.1 %',
    },
    {
      id: '97632c8a1',
      value: 695790,
      percentage: 0.08,
      visible: true,
      label: '0.08 %',
    },
    {
      id: 'b9e72e148',
      value: 340989,
      percentage: 0.04,
      visible: true,
      label: '0.04 %',
    },
    {
      id: 'd3ff26431',
      value: 838882,
      percentage: 0.1,
      visible: true,
      label: '0.1 %',
    },
    {
      id: 'b69322777',
      value: 782956,
      percentage: 0.09,
      visible: true,
      label: '0.09 %',
    },
    {
      id: '113c1e59e',
      value: 1677764,
      percentage: 0.2,
      visible: true,
      label: '0.2 %',
    },
    {
      id: '3d6d0c1bcf2',
      value: 1217633,
      percentage: 0.14,
      visible: true,
      label: '0.14 %',
    },
    {
      id: '0f4aec2f945',
      value: 3190518,
      percentage: 0.38,
      visible: true,
      label: '0.38 %',
    },
    {
      id: '0a1278fc',
      value: 5592545,
      percentage: 0.66,
      visible: true,
      label: '0.66 %',
    },
    {
      id: 'deab5a686',
      value: 695790,
      percentage: 0.08,
      visible: true,
      label: '0.08 %',
    },
    {
      id: 'fddd0c1d0dd',
      value: 559254,
      percentage: 0.07,
      visible: true,
      label: '0.07 %',
    },
    {
      id: '2eb233090c',
      value: 324680,
      percentage: 0.04,
      visible: true,
      label: '0.04 %',
    },
    {
      id: 'a255b8d',
      value: 55926,
      percentage: 0.01,
      visible: true,
      label: '0.01 %',
    },
    {
      id: '21d0ac35847',
      value: 320551,
      percentage: 0.04,
      visible: true,
      label: '0.04 %',
    },
    {
      id: '350dc5178',
      value: 36461,
      percentage: 0,
      visible: true,
      label: '0 %',
    },
    { id: '88929e32', value: 6625, percentage: 0, visible: true, label: '0 %' },
    {
      id: 'b5400a2a92c',
      value: 318651,
      percentage: 0.04,
      visible: true,
      label: '0.04 %',
    },
  ];

  testDataSet$ = of(this.testDataSet);
}
