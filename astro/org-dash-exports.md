---
sidebar_label: 'Export reporting data'
title: "Export Astro reporting data"
id: org-dash-exports
description: "Export data from Organization dashboards or configure conditional exports as alerts."
---
import EnterpriseBadge from '@site/src/components/EnterpriseBadge';

<EnterpriseBadge/>

:::publicpreview
:::

As an Astro administrator, you can export reporting data to share with other team members or to keep a record of key performance indicators. Astro supports several different methods for exporting reporting data based on how and when you want to receive the data. Specifically, you can export data:

- Manually through the Astro UI.
- On a regular schedule.
- Whenever a certain condition is met, such as a metric reaching a specific threshold. This is known as a *dashboard alert*.

When you export reporting data, Astro exports the last [one million rows of data](https://help.sigmacomputing.com/docs/download-export-and-upload-limitations) from a specific dashboard in the file format of your choice. Use this document to learn about the different ways you can trigger the export process.

:::tip

Watch the Astro Academy [Reporting](https://academy.astronomer.io/learning-bytes-reporting) Learning Byte video to learn more about how observe your teams' Airflow Deployments.

:::

## Prerequisites

- Only users with **Organization Billing Admin** [user permissions](user-permissions.md#organization-roles) can access Organization dashboards.

## Download reporting data

1. To view Organization dashboards, click your Workspace name in the upper left corner of the Astro UI, click **Organization Settings**, and then click **Dashboards**. You can also access this page directly at [https://cloud.astronomer.io/dashboards](https://cloud.astronomer.io/dashboards).
2. Open the **Export** menu on the chart or table that you want to export.

    <img src={require("../static/img/docs/dash-open-menu.png").default} alt="Expand the menu to view all options for downloading data, emailing data, scheduling a data export, and setting up a data alert." style={{ width: "60%", maxWidth: "400px", height: "auto" }} />

3. Choose the file format that you want to download your data in. Astro generates your data export and saves it to your local computer.

## Export reporting data

Instead of downloading your data directly, you can email it or send it to an external service through a webhook.

1. To view Organization dashboards, click your Workspace name in the upper left corner of the Astro UI, click **Organization Settings**, and then click **Dashboards**. You can also access this page directly at [https://cloud.astronomer.io/dashboards](https://cloud.astronomer.io/dashboards).
2. Open the **Export** menu and then select **Send now**.

    <img src={require("../static/img/docs/dash-open-menu.png").default} alt="Expand the menu to view all options for downloading data, emailing data, scheduling a data export, and setting up a data alert." style={{ width: "60%", maxWidth: "400px", height: "auto" }} />

3. Choose where you want to send the data report.
    - **Email** - Enter the recipient's email address and optionally edit the subject line and email body message.
    - **Webhook** - ([Sigma feature in beta](https://help.sigmacomputing.com/docs/webhook-exports)) Add the webhook URL where you want to export your data to.

4. In the **Attachments** section, select the report you want to send and file format to include it as. You can choose from the same file types that are available for a one-time data download.
5. (Optional) To send more than one report, click **+ Add**, and then select the report you want to send and its file format.

When you receive a report via email, the sender appears as **Sigma Computing**. The subject line also includes the name of the dashboard element's data you exported.

![Example email alert shows the sender as Sigma with information about the report in the subject line.](/img/docs/dash-email-alert.png)

### Schedule a data report

1. To view Organization dashboards, click your Workspace name in the upper left corner of the Astro UI, click **Organization Settings**, and then click **Dashboards**. You can also access this page directly at [https://cloud.astronomer.io/dashboards](https://cloud.astronomer.io/dashboards).
2. Open the **Export** menu for the reporting element you want to schedule an export for and select **Schedule exports...**.

    <img src={require("../static/img/docs/dash-open-menu.png").default} alt="Expand the menu to view all options for downloading data, emailing data, scheduling a data export, and setting up a data alert." style={{ width: "60%", maxWidth: "400px", height: "auto" }} />

3. Enter the where you want to send the data report.
    - **Email** - Enter the recipient's email address and optionally edit the subject line and email body message.
    - **Webhook** - ([Sigma feature in beta](https://help.sigmacomputing.com/docs/webhook-exports)) Add the webhook URL where you want to export your data to.

If you toggle **Condition** when setting up your schedule, it allows you to configure a conditional data export, or *dashboard alert*. Instead of sending a report at a specific time interval, it sends a data report when your data meets criteria that you define.

## Create a dashboard alert

A dashboard alert contains a message and a data export that Astro sends when specific criteria are met in one of your reporting metrics. Use dashboard alerts to quickly receive messages and data when your metrics reach a specific threshold, such as when task failures exceed a certain amount.

1. To view Organization Dashboards, click your Workspace name in the upper left corner of the Astro UI, click **Organization Settings**, then click **Dashboards**. You can also access this page directly at [https://cloud.astronomer.io/dashboards](https://cloud.astronomer.io/dashboards).
2. Open the **Export** menu for the reporting element you want to set up an alert for.

    <img src={require("../static/img/docs/dash-open-menu.png").default} alt="Expand the menu to view all options for downloading data, emailing data, scheduling a data export, and setting up a data alert." style={{ width: "60%", maxWidth: "400px", height: "auto" }} />

3. Click **Alert when**. In the **Condition** section that appears, define when you want the dashboard to send the data report.

    <img src={require("../static/img/docs/dash-export-alert.png").default} alt="Configure the conditions that trigger the dashboard to send you a data report for a particular dashboard element." style={{ width: "60%", maxWidth: "400px", height: "auto" }} />

When you receive a dashboard alert in an email, the sender appears as **Sigma Computing**. The subject line also includes the name of the dashboard element's data you exported.