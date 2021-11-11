select acc.id as account_id,
	   acc.name as account_name,
	   to_char(cli.created_at, 'YYYY-mm') as month,
	   count(cli.id) as num_clicks
from (accounts acc left join campaigns camp on acc.id = camp.account_id and acc.active and camp.end_date::DATE - camp.start_date::DATE > 6)
left join clicks cli on camp.id = cli.campaign_id
group by 1, 3
having (select count(camp2.id) from campaigns camp2 where camp2.account_id = acc.id and camp2.created_at >= current_date - interval '6' month) > 0