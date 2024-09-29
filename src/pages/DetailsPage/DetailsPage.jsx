import CamperCardDetails from "../../components/CamperCardDetails/CamperCardDetails";
import DetailsNavigation from "../../components/DetailsNavigation/DetailsNavigation";
import css from "./DetailsPage.module.css";

export default function DetailsPage() {
  return (
    <div className={css.container}>
      <div>
        <CamperCardDetails />
      </div>
      <div>
        <DetailsNavigation />
      </div>
    </div>
  );
}

