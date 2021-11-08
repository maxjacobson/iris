import React, { useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Header } from '../typography';
import { Modal, Panel, Sidebar } from '../layout';
import { Video } from '../icons';
import { Layout } from '../storybook';
import { color } from '../tokens/color';
import { blue } from '../color';

export default { title: 'tokens/_mocks' };

const Tokens = styled.div`
  --color-surface-primary: ${color.background(300)};
  --color-surface-secondary: ${color.background(500)};
  --color-surface-tertiary: ${color.background(800)};

  --color-background-primary: ${color.background(200)};
  --color-background-secondary: ${color.background(0)};

  --color-text-primary: ${color.text(900)};
  --color-text-secondary: ${color.text(600)};
`;

export function Fuschia() {
  const stateSidebar = useState('Sources');

  const [activePanel, activePanelSet] = useState(false);
  const togglePanel = () => activePanelSet((active) => !active);

  return (
    <Tokens>
      <Layout.FullBleed>
        <div />
        <Sidebar state={stateSidebar}>
          <Sidebar.Item
            label="Label"
            icon={<Video />}
            children={<div />}
          />
          <Sidebar.Item
            label="Label"
            icon={<Video />}
            children={<div />}
          />
          <Sidebar.Item
            label="Label"
            icon={<Video />}
            children={<div />}
          />
          <Sidebar.Break />
          <Sidebar.Item
            label="Label"
            icon={<Video />}
            children={<div />}
          />
          <Sidebar.Item
            label="Label"
            icon={<Video />}
            children={<div />}
          />
          <Sidebar.Item
            label="Label"
            icon={<Video />}
            children={<div />}
          />
          <Sidebar.Break />
          <Sidebar.Item
            label="Label"
            icon={<Video />}
            children={<div />}
          />
          <Sidebar.Item
            label="Label"
            icon={<Video />}
            children={<div />}
          />
        </Sidebar>
        <div
          style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}
        >
          <Modal
            content={
              <ModalContent>
                <Header>Hello!</Header>
              </ModalContent>
            }
          >
            <Card>Open a Modal</Card>
          </Modal>
          <Panel
            active={activePanel}
            content={
              <ModalContent>
                <Header>Hello!</Header>
              </ModalContent>
            }
          ></Panel>
          <Card onClick={togglePanel}>Open a Panel</Card>
          <Card>Card</Card>
        </div>
      </Layout.FullBleed>
    </Tokens>
  );
}

const ModalContent = styled.div`
  padding: 1rem;
`;

const Card = styled.div`
  background: var(--color-surface-tertiary);
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  width: 20rem;
  height: 20rem;
  border: 1px solid ${(p) => rgba(color.text(900)(p.theme), 0.2)};
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    border: 2px solid ${rgba(blue(500), 0.75)};
  }
`;
