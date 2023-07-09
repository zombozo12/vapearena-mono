import {Badge, Button, Card, Center, createStyles, Group, Image, rem, Text} from '@mantine/core';
import {IconAspectRatio, IconBattery4, IconCpu} from '@tabler/icons-react';
import React, {useState} from "react";
import {Vape} from "../../api/types";

const useStyles = createStyles((theme) => ({
    card: {},
    imageSection: {
        padding: theme.spacing.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
    },
    label: {
        marginBottom: theme.spacing.xs,
        lineHeight: 1,
        fontWeight: 700,
        fontSize: theme.fontSizes.xs,
        letterSpacing: rem(-0.25),
        textTransform: 'uppercase',
    },
    section: {
        padding: theme.spacing.md,
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
    },
    icon: {
        marginRight: rem(5),
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },
    button: {}
}));

export function ProductCards({name, known_as, brand, type, basic_infos, price}: Vape) {
    const {classes} = useStyles();
    const [vapeID, setVapeID] = useState(0);

    console.log(vapeID, setVapeID)

    const infos = basic_infos.map((info) => {
        const type = info.type;
        switch (type) {
            case "processor":
                return (
                    <Center key={info.label}>
                        <IconCpu size="1.05rem" className={classes.icon} stroke={1.5}/>
                        <Text fz="xs">{info.label}</Text>
                    </Center>
                );
            case "display":
                return (
                    <Center key={info.label}>
                        <IconAspectRatio size="1.05rem" className={classes.icon} stroke={1.5}/>
                        <Text fz="xs">{info.label}</Text>
                    </Center>
                );
            case "battery":
                return (
                    <Center key={info.label}>
                        <IconBattery4 size="1.05rem" className={classes.icon} stroke={1.5}/>
                        <Text fz="xs">{info.label}</Text>
                    </Center>
                );
        }
    });

    return (
        <Card withBorder radius="md">
            <Card.Section className={classes.imageSection}>
                <Image src="https://i.imgur.com/ZL52Q2D.png" alt="Tesla Model S"/>
            </Card.Section>

            <Group position="apart" mt="md">
                <div>
                    <Text fw={500}>{name}</Text>
                    <Text fz="sm" c="dimmed" fw={500} sx={{lineHeight: 1}} mt={3}>
                        {type}
                    </Text>
                    <Text fz="xs" c="dimmed">
                        {known_as}
                    </Text>
                </div>
                <Badge variant="outline">{brand}</Badge>
            </Group>

            <Card.Section className={classes.section} mt="md">
                <Text fz="sm" c="dimmed" className={classes.label}>
                    Basic information
                </Text>

                <Group spacing={8} mb={-8}>
                    {infos}
                </Group>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Group spacing={20}>
                    {price && (
                        <div>
                            <Text fz="xl" fw={700} sx={{lineHeight: 1}}>
                                {price}
                            </Text>
                            <Text fz="sm" c="dimmed" fw={500} sx={{lineHeight: 1}} mt={3}>
                                in average
                            </Text>
                        </div>
                    )}

                    <Button variant="light" radius="xl">
                        Add to Compare
                    </Button>
                </Group>
            </Card.Section>
        </Card>
    );
}
