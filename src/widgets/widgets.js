import adguard from "./adguard/widget";
import authentik from "./authentik/widget";
import autobrr from "./autobrr/widget";
import bazarr from "./bazarr/widget";
import changedetectionio from "./changedetectionio/widget";
import coinmarketcap from "./coinmarketcap/widget";
import deluge from "./deluge/widget";
import downloadstation from "./downloadstation/widget";
import emby from "./emby/widget";
import flood from "./flood/widget";
import gluetun from "./gluetun/widget";
import gotify from "./gotify/widget";
import hdhomerun from "./hdhomerun/widget";
import homebridge from "./homebridge/widget";
import jackett from "./jackett/widget";
import jellyseerr from "./jellyseerr/widget";
import lidarr from "./lidarr/widget";
import mastodon from "./mastodon/widget";
import medusa from "./medusa/widget";
import miniflux from "./miniflux/widget";
import mikrotik from "./mikrotik/widget";
import moonraker from "./moonraker/widget";
import navidrome from "./navidrome/widget";
import nextdns from "./nextdns/widget";
import npm from "./npm/widget";
import nzbget from "./nzbget/widget";
import omada from "./omada/widget";
import ombi from "./ombi/widget";
import opnsense from "./opnsense/widget";
import overseerr from "./overseerr/widget";
import paperlessngx from "./paperlessngx/widget";
import pihole from "./pihole/widget";
import plex from "./plex/widget";
import portainer from "./portainer/widget";
import prowlarr from "./prowlarr/widget";
import proxmox from "./proxmox/widget";
import pyload from "./pyload/widget";
import qbittorrent from "./qbittorrent/widget";
import radarr from "./radarr/widget";
import readarr from "./readarr/widget";
import rutorrent from "./rutorrent/widget";
import sabnzbd from "./sabnzbd/widget";
import scrutiny from "./scrutiny/widget";
import sonarr from "./sonarr/widget";
import speedtest from "./speedtest/widget";
import strelaysrv from "./strelaysrv/widget";
import tautulli from "./tautulli/widget";
import tdarr from "./tdarr/widget";
import traefik from "./traefik/widget";
import transmission from "./transmission/widget";
import tubearchivist from "./tubearchivist/widget";
import truenas from "./truenas/widget";
import unifi from "./unifi/widget";
import watchtower from './watchtower/widget'
import xteve from './xteve/widget'

const widgets = {
  adguard,
  authentik,
  autobrr,
  bazarr,
  changedetectionio,
  coinmarketcap,
  deluge,
  diskstation: downloadstation,
  downloadstation,
  emby,
  flood,
  gluetun,
  gotify,
  hdhomerun,
  homebridge,
  jackett,
  jellyfin: emby,
  jellyseerr,
  lidarr,
  mastodon,
  medusa,
  miniflux,
  mikrotik,
  moonraker,
  navidrome,
  nextdns,
  npm,
  nzbget,
  omada,
  ombi,
  opnsense,
  overseerr,
  paperlessngx,
  pihole,
  plex,
  portainer,
  prowlarr,
  proxmox,
  pyload,
  qbittorrent,
  radarr,
  readarr,
  rutorrent,
  sabnzbd,
  scrutiny,
  sonarr,
  speedtest,
  strelaysrv,
  tautulli,
  tdarr,
  traefik,
  transmission,
  tubearchivist,
  truenas,
  unifi,
  unifi_console: unifi,
  watchtower,
  xteve,
};

export default widgets;
