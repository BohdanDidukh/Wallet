import React from "react";

import { ReactComponent as HomeIcon } from "../assets/img/home.svg";
import { ReactComponent as StatisticIcon } from "../assets/img/statistic.svg";
import { ReactComponent as SettingsIcon } from "../assets/img/settings.svg";
import { ReactComponent as IncomeIcon } from "../assets/img/income.svg";
import { ReactComponent as PaymentIcon } from "../assets/img/payment.svg";
import { ReactComponent as PaymentBlackIcon } from "../assets/img/payment-black.svg";
import { ReactComponent as HelpIcon } from "../assets/img/help.svg";
import { ReactComponent as DollarIcon } from "../assets/img/dollar.svg";
import { ReactComponent as TrashIcon } from "../assets/img/trash.svg";
import { ReactComponent as EditIcon } from "../assets/img/edit.svg";
import { ReactComponent as MoneyIcon } from "../assets/img/money.svg";
import { ReactComponent as MoneyHandIcon } from "../assets/img/money-hand.svg";

function SvgIcons({ name, className, size }) {
  if (name === "dashboard") {
    return <HomeIcon className={className} width={size} height={size} />;
  }
  if (name === "statistic") {
    return <StatisticIcon className={className} width={size} height={size} />;
  }
  if (name === "settings") {
    return <SettingsIcon className={className} width={size} height={size} />;
  }
  if (name === "income") {
    return <IncomeIcon className={className} width={size} height={size} />;
  }
  if (name === "payment") {
    return <PaymentIcon className={className} width={size} height={size} />;
  }
  if (name === "payment-black") {
    return <PaymentBlackIcon className={className} width={size} height={size} />;
  }
  if (name === "help") {
    return <HelpIcon className={className} width={size} height={size} />;
  }
  if (name === "dollar") {
    return <DollarIcon className={className} width={size} height={size} />;
  }
  if (name === "trash") {
    return <TrashIcon className={className} width={size} height={size} />;
  }
  if (name === "edit") {
    return <EditIcon className={className} width={size} height={size} />;
  }
  if (name === "money") {
    return <MoneyIcon className={className} width={size} height={size} />;
  }
  if (name === "money-hand") {
    return <MoneyHandIcon className={className} width={size} height={size} />;
  }
}

export default SvgIcons;
