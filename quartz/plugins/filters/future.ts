import { QuartzFilterPlugin } from "../types"

export const RemoveFuture: QuartzFilterPlugin = () => ({
  name: "RemoveFuture",
  shouldPublish(_ctx, [_tree, vfile]) {
    return vfile.data?.dates?.created !== undefined && vfile.data?.dates?.created <= new Date()
  },
})
