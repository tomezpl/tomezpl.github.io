import {FiExternalLink} from 'react-icons/fi';

type PortfolioProductDetailsProps = {
    company: string;
    dates: [string, string] | [string];
    link?: string;
};

export function PortfolioProductDetails({company, dates: [dateStart, dateEnd], link}: PortfolioProductDetailsProps) {
    return <>{company}, {dateStart}{dateEnd ? `-${dateEnd}` : null}{!link ? null : <> | <a href={link} target={'_blank'}>See it here <FiExternalLink /></a></>}</>;
}