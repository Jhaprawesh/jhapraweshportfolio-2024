import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import "../styles/Card.css";

import { Avatar } from "@mantine/core";

function CardDemo(props) {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <>
      <div className="hover:tw-shadow-2xl">
        <Card shadow="sm" padding="lg" classNames={{ root: "-tw-bg-gray-900" }}>
          <Card.Section>
            <Image
              src={props.src}
              className="tw-h-full card-img-top tw-aspect-video tw-rounded-md tw-p-2"
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <Text weight={700}>{props.title}</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
            <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
              {props.desc}
            </Text>
          </Group>
          <div className="footer">
            <div className="tw-flex tw-justify-between tw-items-center tw-mt-4">
              <Badge
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan" }}
              >
                {props.author}
              </Badge>

              <Button variant="light" color="blue" size="md">
                Read Now
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default CardDemo;
