import {FiExternalLink} from "react-icons/fi";

type PortfolioProductDetailsProps = {
    company: string;
    dates: [string, string];
    link?: string;
};

export function PortfolioProductDetails({company, dates: [dateStart, dateEnd], link}: PortfolioProductDetailsProps) {
    return <>{company}, {dateStart}-{dateEnd}{!link ? null : <> | <a href={link} target={'_blank'}>See it here <FiExternalLink /></a></>}</>;
}