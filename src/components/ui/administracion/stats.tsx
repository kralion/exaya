import {
  createStyles,
  Progress,
  Box,
  Text,
  Group,
  Paper,
  SimpleGrid,
  rem,
} from "@mantine/core";
import { RiseOutlined, FundProjectionScreenOutlined } from "@ant-design/icons";

const useStyles = createStyles((theme) => ({
  progressLabel: {
    lineHeight: 1,
    fontSize: theme.fontSizes.sm,
  },

  stat: {
    borderBottom: `${rem(3)} solid`,
    paddingBottom: rem(5),
  },

  statCount: {
    lineHeight: 1.3,
  },

  diff: {
    display: "flex",
    alignItems: "center",
  },
}));

interface StatsSegmentsProps {
  total: string;
  diff: number;
  data: {
    label: string;
    count: string;
    part: number;
    color: string;
  }[];
}

export function StatsSegments({ total, diff, data }: StatsSegmentsProps) {
  const { classes } = useStyles();

  const segments = data.map((segment) => ({
    value: segment.part,
    color: segment.color,
    label: segment.part > 10 ? `${segment.part}%` : undefined,
  }));

  const descriptions = data.map((stat) => (
    <Box
      key={stat.label}
      sx={{ borderBottomColor: stat.color }}
      className={classes.stat}
    >
      <Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
        {stat.label}
      </Text>

      <Group position="apart" align="flex-end" spacing={0}>
        <Text fw={700}>{stat.count}</Text>
        <Text c={stat.color} fw={700} size="sm" className={classes.statCount}>
          {stat.part}%
        </Text>
      </Group>
    </Box>
  ));

  return (
    <Paper
      className="h-1/2 w-full border-1 hover:bg-cyan-100/10 hover:shadow-md "
      withBorder
      p="md"
      radius="md"
    >
      <Text c="dimmed" fz="sm">
        Ranking de Ventas
      </Text>

      <Group position="apart">
        <Group align="flex-end" spacing="xs">
          <Text fz="xl" fw={700}>
            {total}
          </Text>
          <Text c="teal" className={classes.diff} fz="sm" fw={700}>
            <span>{diff}%</span>
            <RiseOutlined size={20} style={{ marginBottom: rem(4) }} />
          </Text>
        </Group>
        <FundProjectionScreenOutlined className={classes.icon} />
      </Group>

      <Text c="dimmed" fz="sm">
        Page views compared to previous month
      </Text>

      <Progress
        sections={segments}
        size={34}
        classNames={{ label: classes.progressLabel }}
        mt={40}
      />
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: "xs", cols: 1 }]} mt="xl">
        {descriptions}
      </SimpleGrid>
    </Paper>
  );
}
