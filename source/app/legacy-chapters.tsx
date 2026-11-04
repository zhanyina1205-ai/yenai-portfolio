'use client';
import { useEffect } from 'react';
import { assetPath } from './asset-path';
const destinations:Record<string,string>={about:'about',workflow:'about',liangliang:'liangliang','ip-selected-work':'liangliang','ip-breakdown':'liangliang','ip-editing-project':'liangliang','my-account':'accounts','yenai-audience':'accounts','yenai-origin':'accounts',lookbook:'accounts','selected-notes':'accounts','rock-account':'accounts',montirivers:'montirivers','montirivers-work':'montirivers','montirivers-backstage':'montirivers','montirivers-matrix':'montirivers',tools:'tools'};
export function LegacyChapters(){useEffect(()=>{const redirect=()=>{const id=location.hash.slice(1);if(destinations[id])location.replace(assetPath(`/${destinations[id]}/#${id}`));else if(id==='projects')location.replace(assetPath('/#modules'));};redirect();addEventListener('hashchange',redirect);return()=>removeEventListener('hashchange',redirect);},[]);return null;}
