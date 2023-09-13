import { Tooltip } from 'antd';
import { Flex } from '../styled/blocks'
import Text from '../styled/texts';
import { MailOutlined } from '@ant-design/icons';
import GhostBlock from '../styled/ghost_block';

const FooterBar = ({ height }: { height: string }) => {
  const contactEmail = "hello@newaggregator.com"

  return (
    <Flex align='center' justify="space-between" height={height}>
      <Text padding="5px 0">
        © Copyright 2023 <strong>New Aggregator</strong> All rights reserved.
      </Text>
      <Text padding="5px 0">
        <GhostBlock displayUntil='md'>
          <Tooltip placement="top" title={contactEmail}>
            <MailOutlined />
          </Tooltip >
        </GhostBlock>

        <GhostBlock displayFrom='md'>
          { contactEmail }
        </GhostBlock>
      </Text>
    </Flex>
  )
}

export default FooterBar
