import { Avatar, Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';

import style from './card.module.css';

interface CardUserComponentProps {
  author: string;
}

export const CardUserComponent: React.FC<CardUserComponentProps> = ({ author }) => {
  return (
    <div>
      <Group wrap="nowrap">
        <Avatar
          src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
          size={94}
          className="rounded-[100px]"
        />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Creator at DomPixel
          </Text>

          <Text fz="lg" fw={500} className={style.name}>
            {author}
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={style.icon} />
            <Text fz="xs" c="dimmed">
              creator@dompixel.com
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={style.icon} />
            <Text fz="xs" c="dimmed">
              +55 (11) 00000-0000
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
};
