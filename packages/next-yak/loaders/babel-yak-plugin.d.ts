// babel-yak-plugin.d.ts
import { PluginItem } from '@babel/core';

export type YakBabelPluginOptions = {
    replaces: Record<string, Record<string, string>>, 
    rootContext?: string
}

export default function plugin(options: YakBabelPluginOptions): PluginItem;
