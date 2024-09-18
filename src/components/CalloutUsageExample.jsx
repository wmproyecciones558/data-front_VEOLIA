import { RiAlarmWarningLine, RiCheckboxCircleLine } from '@remixicon/react';
import { Callout, Card } from '@tremor/react';

export function CalloutUsageExample() {
  return (
    <div className="space-y-6">
      <Card className="mx-auto max-w-md">
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Current wind speed: Turbine 1</p>
        <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">18.4knts</p>
        <Callout
          className="mt-4"
          title="Critical speed limit reached"
          icon={RiAlarmWarningLine}
          color="rose"
        >
          Turbine reached critical speed. Immediately reduce turbine speed.
        </Callout>
      </Card>
      <Card className="mx-auto max-w-md">
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Current wind speed: Turbine 2</p>
        <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">7.2knts</p>
        <Callout
          className="mt-4"
          title="No critical system data"
          icon={RiCheckboxCircleLine}
          color="teal"
        >
          All systems are currently within their default operating ranges.
        </Callout>
      </Card>
    </div>
  );
}