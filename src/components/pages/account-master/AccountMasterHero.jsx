import ProductHero from "@/components/ui/ProductHero";
import AccountMasterOrbit from "@/components/pages/account-master/AccountMasterOrbit";
import { accountMasterHero } from "@/lib/product-heroes";

export default function AccountMasterHero() {
  return <ProductHero {...accountMasterHero} visual={<AccountMasterOrbit />} />;
}
