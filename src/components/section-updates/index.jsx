import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionUpdates = ({ updates }) => {
  return (
    <Section title="Last Updates">
      {updates.map((update) => (
        <SummaryItem
          key={update.name}
          date={update.date}
          name={update.name}
          description={update.description}
        />
      ))}
    </Section>
  );
};

export default SectionUpdates;
