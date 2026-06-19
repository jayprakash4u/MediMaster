import ProductHero from "@/components/ui/ProductHero";
import AccountingOrbit from "@/components/pages/accounting-software/AccountingOrbit";
import { accountingHero } from "@/config/heroes/product";

export default function AccountingHero() {
  return <ProductHero {...accountingHero} visual={<AccountingOrbit />} />;
}
