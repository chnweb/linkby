create index idx_accounts_active on accounts(active);
create index idx_campaigns_accountid on campaigns(account_id);
create index idx_campaigns_startdate on campaigns(start_date);
create index idx_campaigns_enddate on campaigns(end_date);
create index idx_campaigns_createdat on campaigns(created_at);
create index idx_clicks_campaignid on clicks(campaign_id);
create index idx_clicks_createdat on clicks(created_at);