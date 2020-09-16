<template>
  <div id="job-details" class="container">
    <div class="row pt-3" v-if="job._id">
      <div class="col-6">
        <h2>{{job.jobTitle}} - {{job.company}} - {{job.hours}}</h2>
        <p>${{job.rate.toFixed(2)}}</p>
        <h4>{{job.description}}</h4>
        <div class="d-flex justify-content-between">
          <button class="btn btn-outline-danger" @click="deleteJob">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Job-Details",
  mounted(){
    this.$store.dispatch("getJobById", this.$route.params.id)
  },
  data(){
    return {}
  },
  computed: {
    job(){
      return this.$store.state.activeJob
    }
  },
  methods: {
    deleteJob(){
      this.$store.dispatch("deleteJob", this.job._id)
    }
  }
}
</script>

<style>

</style>