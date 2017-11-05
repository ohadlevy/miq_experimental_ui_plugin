import React from 'react';
import { ListView, ListViewItem, ListViewIcon } from 'patternfly-react';
import { Row, Col } from 'react-bootstrap';
import { mockListItems, renderActions, renderAdditionalInfoItems } from './__mocks__/mockListItems';

export default () => (
  <div>
    <h1>Dashboard Page</h1>

    <ListView>
      {mockListItems.map(item => (
        <ListViewItem
          key={item.title}
          actions={renderActions(item.actions)}
          checkboxInput={<input type="checkbox" />}
          leftContent={<ListViewIcon icon="fa fa-plane" />}
          additionalInfo={renderAdditionalInfoItems(item.properties)}
          heading={item.title}
          description={item.description}
          stacked
        >
          <Row>
            <Col sm={11}>{item.expandedContentText}</Col>
          </Row>
        </ListViewItem>
      ))}
    </ListView>
  </div>
);
