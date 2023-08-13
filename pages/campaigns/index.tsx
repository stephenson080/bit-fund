import { NextPage } from "next";
import { useRouter } from "next/router";
import { Container, Button } from "semantic-ui-react";

import Layout from "../../components/layout";
import Campaign from "../../components/Campaign";

import campaignManager from "../../ethereum/scripts/campaignManager";
import web3 from "../../ethereum/scripts/web3";
import CampaignInstance from "../../ethereum/scripts/campaign";

type Props = {
  campaigns: any[];
};

export async function getStaticProps() {
  let campaigns: any[] = [];
  const camp = await campaignManager.methods.getDeployedCampaigns().call();
  for (let add of camp) {
    const cam = CampaignInstance(add);
    const minContribution = await cam.methods.minContribution().call();
    campaigns.push({
      meta:
        "Min. Contribution: " +
        web3.utils.fromWei(minContribution, "ether") +
        " ether",
      header: `Project address ${cam.options.address}`,
      fluid: true,
      href: `/campaigns/${cam.options.address}`,
    });
  }
  return {
    props: {
      campaigns: campaigns,
    },
  };
}

export default function Campaigns(props: Props) {
  const router = useRouter();

  function goToAddProject() {
    router.replace("/campaigns/add-project");
  }

  return (
    <div>
      <Layout activeItem="all-projects">
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div style={{ backgroundColor: "white" }}>
              <h2 style={{ margin: "18px 0" }}>Open Projects</h2>
              <Campaign items={props.campaigns} />
            </div>
            <Button
              color="violet"
              onClick={goToAddProject}
              style={{ marginTop: "18px", width: "35%", height: "50px" }}
              content="Create Project"
              icon="add"
              labelPosition="left"
            />
          </div>
        </Container>
      </Layout>
    </div>
  );
}
