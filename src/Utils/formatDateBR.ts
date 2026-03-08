import dayjs from "dayjs";

export const formatDateTimeBR = (isoDate: string) => dayjs(isoDate).format("DD/MM/YYYY HH:mm");
