<template>
  <div class="content-wrapper" style="min-height: 1071.31px;">

    <!-- Main content -->
    <section class="content ">
      <div class="container-fluid">
        <div class="card card-warning card-solid">
          <div class="card-header p-0 pt-1 ">
            <NavClazz :navClazz="appClazz"></NavClazz>
          </div>
          <div class="card-body pb-0">
            <div class="row">
              <AppItem v-for="app in apps" :key="app.uuid" :app="app"></AppItem>
            </div>
          </div>
          <div class="card-footer">
            <Pagination></Pagination>
          </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->

    <a id="back-to-top" href="#" class="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
      <i class="fas fa-chevron-up"></i>
    </a>
  </div>
</template>

<script>
import { appList } from './apis/index'
import appDatas from '@/data/apps.json'
import appClazz from '@/data/clazz/appClazz.json'
import AppItem from './AppItem'
export default {
  name: 'List',
  components: {
    AppItem
  },
  data() {
    return {
      apps: appDatas.data.apps,
      appClazz: appClazz
    }
  },
  methods:{
    appList(){
      appList({}).then(res => {
        if(res.code == '00000'){
          this.apps = res.data.list
        }
      })
    }
  },
  created(){
    this.appList()
  }
}
</script>

<style lang="scss" scoped>

</style>
