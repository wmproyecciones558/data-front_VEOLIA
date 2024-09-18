import { Card, Divider } from '@tremor/react';

export function DividerUsageExample() {
  return (
    <Card className="mx-auto max-w-lg">
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Sales</p>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
      <Divider>Description</Divider>
      <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        tempor lorem non est congue blandit. Praesent non lorem sodales,
        suscipit est sed, hendrerit dolor.
      </p>
    </Card>
  );
}