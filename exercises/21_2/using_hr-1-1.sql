SELECT
  Loc.LOCATION_ID,
  Loc.STREET_ADDRESS,
  Loc.CITY,
  Loc.STATE_PROVINCE,
  Countries.COUNTRY_ID
FROM hr.locations AS Loc
NATURAL JOIN hr.countries AS Countries;
